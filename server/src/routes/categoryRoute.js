import express from 'express';
import auth from '../middlewares/auth';
import {
  addCategory,
  addSubCategory,
  deleteSubCategory,
  getCategory,
  deleteCategory,
} from '../controllers/categoryController';

const router = express.Router();

router.route('/').get(getCategory).post(auth.protect, addCategory);
router.route('/subcategory-delete/:CatId/:subCatId').put(auth.protect, deleteSubCategory);
router.route('/:id').delete(auth.protect, deleteCategory).put(auth.protect, addSubCategory);
const configure = (app) => {
  app.use('/api/category', router);
};

export default configure;
