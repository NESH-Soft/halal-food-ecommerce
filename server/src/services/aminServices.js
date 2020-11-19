import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import models from '../models/index';

const { Admin } = models;

export const findAdminByEmail = async (email) => {
  const admin = await Admin.findOne({ email });
  return admin;
};

// // signIn services
// export const signInAdminServices = async (data) => {
//   return token;
// };

//  signUp services
export const createAdminServices = async (admin) => {
  const savedAdmin = await Admin.create(admin);
  return savedAdmin;
};

export const getAdminServices = async (id) => {
  const admin = Admin.findById(id).select('-password -resetPasswordExpires -resetPasswordToken');
  return admin;
};

export const UpdateAdminServices = async (id, admin) => {
  // eslint-disable-next-line
  const updateAdmin = Admin.findByIdAndUpdate( id, admin, { new: true });
  return updateAdmin;
};

export const deleteAdminServices = async (id) => {
  const admin = Admin.findByIdAndRemove(id);
  return admin;
};

export const changePasswordServices = async (id, newPassword) => {
  const admin = await Admin.findOneAndUpdate(
    { _id: id },
    { $set: { password: newPassword } },
  );
  return admin;
};

//  forgot password
// export const forgotPasswordAdminServices = async (data) => {

// };
//  reset password
// export const resetPasswordAdminServices = async (data) => {

// };
