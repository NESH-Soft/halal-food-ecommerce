import express from 'express';
import multerUpload from '../middlewares/multer_cloudinary';
import auth from '../middlewares/auth';
import {
  getProducts,
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
  searchProduct,
} from '../controllers/productController';

const router = express.Router();
router.route('/search').get(searchProduct);
router.route('/').get(getProducts).post(auth.protect, auth.authorize('admin'), multerUpload.single('image'), addProduct);

router.route('/:id').get(getProduct).delete(auth.protect, auth.authorize('admin'), deleteProduct).put(auth.protect, auth.authorize('admin'), updateProduct);

router.route('/filter/:category').get(getProductsByCategory);

const configure = (app) => {
  app.use('/api/product', router);
};

export default configure;
