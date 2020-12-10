import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import sendTokenResponse from '../utils/sendTokenResponse';
import sendEmail from '../utils/sendEmail';
import {
  getAdminServices,
  createAdminServices,
  UpdateAdminServices,
  deleteAdminServices,
  changePasswordServices,
  findAdminByEmail,
} from '../services/aminServices';
import asyncHandler from '../utils/async';
import { BadRequest, NotFound } from '../utils/error';

export const signupAdmin = asyncHandler(async (req, res) => {
  const admin = req.body;

  const isAdmin = await findAdminByEmail(admin.email);
  if (isAdmin) {
    throw new BadRequest('Email already Exits');
  }
  //  Register token
  const registerToken = jwt.sign({ admin }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE_VERIFICATION,
  });

  // Create reset URL
  const verificationURL = `${req.protocol}://${req.headers.host}/verify/${registerToken}`;

  const message = `Please click the link below to complete your signup process on Halal Food: \n\n ${verificationURL} `;

  await sendEmail({
    email: admin.email,
    subject: 'Halal Food account verification',
    message,
  });

  res.status(200).json({ success: true, data: `Please check your email ${admin.email} to complete signUp process` });
});

// Verify admin
export const verifyAdmin = asyncHandler(async (req, res) => {
  const token = req.params.registerToken;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  decoded.admin.password = await bcrypt.hash(decoded.admin.password, 11);
  const admin = await createAdminServices(decoded.admin);
  sendTokenResponse(admin, 201, res);
});

export const signInAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const admin = await findAdminByEmail(email);

  if (!admin) {
    throw new NotFound('Email doesn\'t exists');
  }

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    throw new BadRequest('Invalid credentials');
  }

  sendTokenResponse(admin, 200, res);
});

export const updateAdmin = asyncHandler(async (req, res) => {
  const updatedAdmin = await UpdateAdminServices(req.params.id, req.body);
  if (!updatedAdmin) throw new BadRequest('Admin not found with the id provided');
  return res.status(200).json({ success: true, updateAdmin, msg: 'admin update successfully' });
});

export const deleteAdmin = asyncHandler(async (req, res) => {
  // eslint-disable-next-line
  const deletedAdmin = await deleteAdminServices(req.admin._id);
  return res.status(200).json({ success: true, deletedAdmin, msg: 'Admin deleted successfully' });
});

export const changePassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const match = await bcrypt.compare(oldPassword, req.admin.password);

  if (!match) {
    throw new BadRequest('Old password doesn\'t match');
  }

  const hash = await bcrypt.hash(newPassword, 11);
  req.body.newPassword = hash;
  await changePasswordServices(req.admin.id, req.body);
  return res.status(200).json({ success: true, msg: 'Password successfully changed, please log back in to take effect' });
});

// get user
export const getAdmin = asyncHandler(async (req, res) => {
  const admin = await getAdminServices(req.admin.id);
  if (!admin) {
    throw new NotFound('User not found');
  }
  res.status(200).json({ success: true, admin, msg: 'Admin fetched' });
});
