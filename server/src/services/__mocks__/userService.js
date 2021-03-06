import models from '../../models/index';

const { User } = models;

const users = [
  {
    _id: '1', name: 'Naser', email: 'nase@gmail.com',
  },
  {
    _id: '2', name: 'Abdullah', email: 'abdullah@gmail.com',
  },
];

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
  let updatedUser = user.find((u) => u._id === id);
  if (updatedUser) {
    updatedUser = user;
  }
  return updatedUser;
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
