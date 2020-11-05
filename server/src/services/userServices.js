import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import models from '../models/index';

const { User } = models;

// Get token from model, create cookie and send response
const sendTokenResponse = (user) => {
  // Create token
  //  eslint-disable-next-line
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
  return token;
};

// signIn services
export const signInUserServices = async (data) => {
  const { email, password } = data;

  // Check for manager
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    // throw new NotFound(`User not found by the :${email}`);
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    // throw new BadRequest('Invalid credentials');
  }
  const token = sendTokenResponse(user);
  return token;
};

//  signUp services
export const signUpUserServices = async (user) => {
  const { name, email } = user;
  let { password } = user;
  const isUser = await User.findOne({ email });
  if (isUser) {
    // throw new BadRequest('Email already Exits');
  }
  //  hash password
  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt);
  const savedUser = await User.create({ name, email, password });
  return savedUser;
};

export const getUserServices = async (id) => {
  const user = User.findById(id).select('-password -resetPasswordExpires -resetPasswordToken');
  return user;
};

export const UpdateUserServices = async (id, user) => {
  // eslint-disable-next-line
  const updateUser = User.findByIdAndUpdate( id, user, { new: true });
  return updateUser;
};

export const deleteUserServices = async (id) => {
  const user = User.findByIdAndRemove(id);
  return user;
};

export const changePasswordServices = async (data, logUser) => {
  const { oldPassword, newPassword } = data;
  const match = await bcrypt.compare(oldPassword, logUser.password);

  if (!match) {
    // return res.status(400).json({ success: false, msg: 'Old password does not match' });
  }
  const hash = await bcrypt.hash(newPassword, 11);
  const user = await User.findOneAndUpdate(
    { _id: logUser._id },
    { $set: { password: hash } },
  );

  return user;
};

//  forgot password
// export const forgotPasswordUserServices = async (data) => {

// };
//  reset password
// export const resetPasswordUserServices = async (data) => {

// };
