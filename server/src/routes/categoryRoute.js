import express from 'express';
import {
  addCategory,
  getCategory,
  deleteCategory,
} from '../controllers/categoryController';

const router = express.Router();

router.route('/').get(getCategory).post(addCategory);

router.route('/:id').delete(deleteCategory);

const configure = (app) => {
  app.use('/api/category', router);
};

export default configure;
