import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'
import sendTokenResponse from '../utils/sendTokenResponse'
import sendEmail from '../utils/sendEmail'
import {
  createUserServices,
  signInUserServices,
  UpdateUserServices,
  deleteUserServices,
  changePasswordServices,
  findUserByEmail
} from '../services/userServices';
import asyncHandler from '../utils/async';
import { BadRequest, NotFound } from '../utils/error'


export const signupUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const user = await findUserByEmail(email);
  if (user) {
    throw new BadRequest('Email already Exits');
  }
  //  Register token
  const registerToken = jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE_VERIFICATION
  })

   // Create reset URL
  const verificationURL = `${req.protocol}://${req.headers.host}/verify/${registerToken}`;

  const message = `Please click the link below to complete your signup process on Halal Food: \n\n ${verificationURL} `;

  await sendEmail({
    email: user.email,
    subject: 'Halal Food account verification',
    message,
  });

  res.status(200).json({ success: true, data: `Please check your email ${user.email} to complete signUp process` });
});

// Verify user
export const verifyUser = asyncHandler(async (req, res) => {
  const token = req.params.registerToken;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const salt = await bcrypt.genSalt(10);
  decoded.user.password = await bcrypt.hash(decoded.user.password, salt);
  const user = await createUserServices(decoded.user);
  sendTokenResponse(user, 201, res);
});

export const signInUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);

  if (!user) {
    throw new NotFound('Email doesn\'t exists');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new BadRequest('Invalid credentials');
  }

  sendTokenResponse(user, 200, res)
});

export const updateUser = asyncHandler(async (req, res) => {
  const user = await UpdateUserServices(req.params.id, req.body);
  if (!user) throw new BadRequest('User not found with the id provided')
  return res.status(200).send(user);
});

export const deleteUser = asyncHandler(async (req, res) => {
  const deletedUser = await deleteUserServices(req.user._id);
  return res.status(200).json({ success: true, deleteUser, msg: 'User deleted successfully' });
});

export const changePassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const match = await bcrypt.compare(oldPassword, req.user.password);

  if (!match) {
    throw new BadRequest('Old password doesn\'t match')
  }

  const hash = await bcrypt.hash(newPassword, 11);
  req.body.newPassword = hash;
  const user = await changePasswordServices(req.user.id, req.body);
  return res.status(200).json({ success: true, msg: 'Password successfully changed, please log back in to take effect' });
});
