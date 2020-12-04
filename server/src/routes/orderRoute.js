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
  offlineSale,
} from '../controllers/orderController';

const router = express.Router();
router.route('/cash-on-delivery').post(addOrderCashOnDelivery);
router.route('/order-filter').get(getOrderByFilter);
router.route('/change-order-action').put(changeOrderAction);
router.route('/recent').get(getRecentOrder);
router.route('/today').get(getOrderToday);
router.route('/day').get(getOrderDay);
router.route('/offline-sale').get(offlineSale);
router.route('/order-info').get(getOrderInfo);
router.route('/').get(getOrders).post(addOrder);
router.route('/:id').delete(deleteOrder);

const configure = (app) => {
  app.use('/api/order', router);
};

export default configure;
