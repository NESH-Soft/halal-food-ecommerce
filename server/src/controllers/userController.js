import {
  getAllUsers,
  getSingleUser,
  postUser,
  putUser,
  deleteUser,
} from '../services/userServices';

export const getController = async (req, res, next) => {
  try {
    const users = await getAllUsers();
    return res.status(200).send(users);
  } catch (error) {
    console.log(error);
  }
};

export const postController = async (req, res, next) => {
  try {
    const user = await postUser(req.body);
    return res.status(201).send(user);
  } catch (error) {
    console.log(error);
  }
};

export const getSingleUserController = async (req, res, next) => {
  try {
    const user = await getSingleUser(req.params.id);
    return res.status(201).send(user);
  } catch (error) {
    console.log(error);
  }
};

export const putUserController = async (req, res, next) => {
  try {
    const user = await putUser(req.body);
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserController = async (req, res, next) => {
  try {
    const user = await deleteUser(req.params.id);
    return res.status(201).send(user);
  } catch (error) {
    console.log(error);
  }
};
