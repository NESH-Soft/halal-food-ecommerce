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
  specialProduct,
  getProductInfo,
} from '../controllers/productController';

const router = express.Router();
router.route('/search').get(searchProduct);
router.route('/special-product').get(specialProduct);
router.route('/filter').get(getProductsByCategory);
router.route('/product-info').get(getProductInfo);
router.route('/').get(getProducts).post(multerUpload.single('image'), addProduct);

router.route('/:id').get(getProduct).delete(deleteProduct).put(updateProduct);

const configure = (app) => {
  app.use('/api/product', router);
};

export default configure;
