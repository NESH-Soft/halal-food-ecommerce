import express from 'express';
import {
  getController,
  postController,
  getSingleUserController,
  putUserController,
  deleteUserController,
} from '../controllers/userController';

const router = express.Router();

router.route('/').get(getController).post(postController).put(putUserController);

router.route('/:id').get(getSingleUserController).delete(deleteUserController);

const configure = (app) => {
  app.use('/api/user', router);
};

export default configure;
