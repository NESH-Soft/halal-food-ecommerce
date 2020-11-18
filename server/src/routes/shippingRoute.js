import express from 'express';
import {
  getShipping,
  addShipping,
  updateShipping,
  deleteShipping,
} from '../controllers/shippingController';

const router = express.Router();

router.route('/').get(getShipping).post(addShipping);

router.route('/:id').delete(deleteShipping).put(updateShipping);

const configure = (app) => {
  app.use('/api/shipping', router);
};

export default configure;
