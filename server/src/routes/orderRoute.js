import express from 'express';
import {
  getOrders,
  addOrder,
  addOrderCashOnDelivery,
  updateOrder,
  deleteOrder,
} from '../controllers/orderController';

const router = express.Router();

router.route('/').get(getOrders).post(addOrder);
router.route('/cash-on-delivery').post(addOrderCashOnDelivery);
router.route('/:id').delete(deleteOrder).put(updateOrder);

const configure = (app) => {
  app.use('/api/order', router);
};

export default configure;
