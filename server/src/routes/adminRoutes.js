import express from 'express';
import auth from '../middlewares/auth';
import {
  signupAdmin,
  signInAdmin,
  updateAdmin,
  deleteAdmin,
  changePassword,
  verifyAdmin,
  forgotPassword,
  resetPassword,
  getAdmin,
} from '../controllers/adminController';

const router = express.Router();

router.route('/login').post(signInAdmin);
router.route('/register').post(signupAdmin);
router.route('/').get(auth.protect, getAdmin);
router.route('/verify/:registerToken').get(verifyAdmin);

router.route('/:id').put(auth.protect, updateAdmin).delete(auth.protect, deleteAdmin);

router.route('/change-password').put(auth.protect, changePassword);

router.route('/forgot').post(forgotPassword);
router.route('/reset/:token').post(resetPassword);

const configure = (app) => {
  app.use('/api/admin', router);
};

export default configure;
