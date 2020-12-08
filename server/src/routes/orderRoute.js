import express from 'express';
import {
  getOrders,
  addOrder,
  getOrderByFilter,
  addOrderCashOnDelivery,
  changeOrderAction,
  getRecentOrder,
  getOrderToday,
  getOrderDay,
  getOrderInfo,
  deleteOrder,
} from '../controllers/orderController';

const router = express.Router();
router.route('/cash-on-delivery').post(addOrderCashOnDelivery);
router.route('/orders').get(getOrderByFilter);
router.route('/change-order-status/:id').put(changeOrderAction);
router.route('/recent').get(getRecentOrder);
router.route('/today').get(getOrderToday);
router.route('/day').get(getOrderDay);
router.route('/order-info').get(getOrderInfo);
router.route('/').get(getOrders).post(addOrder);
router.route('/:id').delete(deleteOrder);

const configure = (app) => {
  app.use('/api/order', router);
};

export default configure;
