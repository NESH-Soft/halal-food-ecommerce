import express from 'express';
import {
  getProducts,
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController';

const router = express.Router();

router.route('/').get(getProducts).post(addProduct);

router.route('/:id').get(getProduct).delete(deleteProduct).put(updateProduct);

const configure = (app) => {
  app.use('/api/product', router);
};

export default configure;
