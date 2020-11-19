import express from 'express';
import {
  signupAdmin,
  signInAdmin,
  updateAdmin,
  deleteAdmin,
  changePassword,
  verifyAdmin,
} from '../controllers/adminController';

const router = express.Router();

router.route('/login').post(signInAdmin);
router.route('/register').post(signupAdmin);
router.route('/verify/:registerToken').get(verifyAdmin);

router.route('/:id').put(updateAdmin).delete(deleteAdmin);

router.route('/change-password').put(changePassword);

const configure = (app) => {
  app.use('/api/admin', router);
};

export default configure;
