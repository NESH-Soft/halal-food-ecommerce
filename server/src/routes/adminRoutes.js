import express from 'express';
import {
  signupAdmin,
  signInAdmin,
  updateAdmin,
  deleteAdmin,
  changePassword,
} from '../controllers/adminController';

const router = express.Router();

router.route('/').get(signInAdmin).post(signupAdmin);

router.route('/:id').put(updateAdmin).delete(deleteAdmin);

router.route('/change-password').put(changePassword);

const configure = (app) => {
  app.use('/api/admin', router);
};

export default configure;
