import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import sendTokenResponse from '../utils/sendTokenResponse';
import sendEmail from '../utils/sendEmail';
import {
  createUserServices,
  UpdateUserServices,
  deleteUserServices,
  changePasswordServices,
  findUserByEmail,
  getUserServices,
  getUsersServices,
  getUsersInfoServices,
} from '../services/userServices';
import asyncHandler from '../utils/async';
import { BadRequest, NotFound } from '../utils/error';

export const signupUser = asyncHandler(async (req, res) => {
  const user = req.body;

  const isUser = await findUserByEmail(user.email);
  if (isUser) {
    throw new BadRequest('Email already Exits');
  }
  //  Register token
  const registerToken = jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE_VERIFICATION,
  });

  // Create reset URL
  const verificationURL = `${req.protocol}://${req.headers.host}/verify/${registerToken}`;

  const message = `Please click the link below to complete your signup process on Halal Food: \n\n ${verificationURL} `;

  await sendEmail({
    email: user.email,
    subject: 'Halal Food account verification',
    message,
  });

  res.status(200).json({ success: true, msg: `Please check your email ${user.email} to complete signUp process` });
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

  sendTokenResponse(user, 200, res);
});

export const updateUser = asyncHandler(async (req, res) => {
  const updatedUser = await UpdateUserServices(req.params.id, req.body);
  if (!updatedUser) throw new BadRequest('User not found with the id provided');
  return res.status(200).json({ success: true, updatedUser, msg: 'User updated successfully' });
});

export const deleteUser = asyncHandler(async (req, res) => {
  const deletedUser = await deleteUserServices(req.user._id);
  return res.status(200).json({ success: true, deletedUser, msg: 'User deleted successfully' });
});

export const changePassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const match = await bcrypt.compare(oldPassword, req.user.password);

  if (!match) {
    throw new BadRequest('Old password doesn\'t match');
  }

  const hash = await bcrypt.hash(newPassword, 11);
  req.body.newPassword = hash;
  await changePasswordServices(req.user.id, req.body);
  return res.status(200).json({ success: true, msg: 'Password successfully changed, please log back in to take effect' });
});

// get user
export const getUser = asyncHandler(async (req, res) => {
  const user = await getUserServices(req.user.id);
  if (!user) {
    throw new NotFound('User not found');
  }
  res.status(200).json({ success: true, user, msg: 'user fetch' });
});

export const getUsers = asyncHandler(async (req, res) => {
  const users = await getUsersServices();
  if (!users) {
    throw new NotFound('User not found');
  }
  res.status(200).json({ success: true, users, msg: 'all user fetch' });
});
export const getInfo = asyncHandler(async (req, res) => {
  const userInfo = await getUsersInfoServices();
  if (!userInfo) {
    throw new NotFound('User info not found');
  }
  res.status(200).json({ success: true, userInfo, msg: 'user Info fetch' });
});
