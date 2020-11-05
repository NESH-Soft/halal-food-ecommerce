import {
  signUpUserServices,
  signInUserServices,
  UpdateUserServices,
  deleteUserServices,
  changePasswordServices,
} from '../services/userServices';
import asyncHandler from '../utils/async';

export const signupUser = asyncHandler(async (req, res) => {
  const user = await signUpUserServices(req.body);
  return res.status(201).send(user);
});

export const signInUser = asyncHandler(async (req, res) => {
  const token = await signInUserServices(req.body);
  return res.status(200).send(token);
});

export const updateUser = asyncHandler(async (req, res) => {
  const user = await UpdateUserServices(req.params.id, req.body);
  return res.status(200).send(user);
});

export const deleteUser = asyncHandler(async (req, res) => {
  const userId = await deleteUserServices(req.user._id);
  return res.status(200).send(userId);
});
export const changePassword = asyncHandler(async (req, res) => {
  const user = await changePasswordServices(req.body, req.user);
  return res.status(200).send(user);
});
