import express from 'express';
import {
  addCategory,
  addSubCategory,
  deleteSubCategory,
  getCategory,
  deleteCategory,
} from '../controllers/categoryController';

const router = express.Router();

router.route('/').get(getCategory).post(addCategory);

router.route('/:id').delete(deleteCategory).put(addSubCategory);
router.route('subcategory-delete/:id').put(deleteSubCategory);

const configure = (app) => {
  app.use('/api/category', router);
};

export default configure;
