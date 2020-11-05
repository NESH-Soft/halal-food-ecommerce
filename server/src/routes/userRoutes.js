import express from 'express';
import {
  signupUser,
  signInUser,
  updateUser,
  deleteUser,
  changePassword,
} from '../controllers/userController';

const router = express.Router();

router.route('/').get(signInUser).post(signupUser);

router.route('/:id').put(updateUser).delete(deleteUser);

router.route('/change-password').put(changePassword);

const configure = (app) => {
  app.use('/api/user', router);
};

export default configure;
