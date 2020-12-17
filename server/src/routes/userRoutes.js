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
  getUsers,
  contactUs,
  forgotPassword,
  resetPassword,
  getInfo,
} from '../controllers/userController';
import { handleValidations } from '../middlewares/handleValidation';
import validators from '../models/validation/index';

const router = express.Router();

router.route('/login').post(handleValidations(validators.loginValidation), signInUser);
router.route('/register').post(handleValidations(validators.registerValidation), signupUser);
router.route('/me').get(auth.protectUser, getUser);
router.route('/change-password').put(auth.protectUser, handleValidations(validators.changePasswordValidation), changePassword);
router.route('/all-user').get(auth.protect, getUsers);
router.route('/info').get(getInfo);
router.route('/contact-us').post(contactUs);
router.route('/verify/:registerToken').get(verifyUser);
router.route('/:id').put(updateUser).delete(deleteUser);

router.route('/forgot').post(forgotPassword);
router.route('/reset/:token').post(handleValidations(validators.forgetPasswordValidation), resetPassword);

const configure = (app) => {
  app.use('/api/user', router);
};

export default configure;
