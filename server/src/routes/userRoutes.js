import express from 'express';
import auth from '../middlewares/auth';
import {
  signupUser,
  signInUser,
  updateUser,
  deleteUser,
  changePassword,
  verifyUser,
  getUser,
} from '../controllers/userController';

const router = express.Router();

router.route('/login').post(signInUser);
router.route('/register').post(signupUser);
router.route('/me').get(auth.protectUser, getUser);

router.route('/verify/:registerToken').get(verifyUser);

router.route('/:id').put(updateUser).delete(deleteUser);

router.route('/change-password').put(changePassword);

const configure = (app) => {
  app.use('/api/user', router);
};

export default configure;
