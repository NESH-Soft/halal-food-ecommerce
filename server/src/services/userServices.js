import models from '../models/index';

const { User } = models;

export const findUserByEmail = async (email) => {
  const user = await User.findOne({ email });
  return user;
};

// signIn services
// export const signInUserServices = async (data) => {
//   return token;
// };

//  signUp services
export const createUserServices = async (user) => {
  const savedUser = await User.create(user);
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

export const changePasswordServices = async (id, newPassword) => {
  const user = await User.findOneAndUpdate(
    { _id: id },
    { $set: { password: newPassword } },
  );
  return user;
};

//  forgot password
// export const forgotPasswordUserServices = async (data) => {

// };
//  reset password
// export const resetPasswordUserServices = async (data) => {

// };
