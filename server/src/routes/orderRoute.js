import express from 'express';
import auth from '../middlewares/auth';
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
  offlineSale,
  deleteOrder,
} from '../controllers/orderController';

const router = express.Router();
router.route('/cash-on-delivery').post(addOrderCashOnDelivery);
router.route('/orders').get(auth.protect, getOrderByFilter);
router.route('/change-order-status/:id').put(auth.protect, changeOrderAction);
router.route('/recent').get(auth.protect, getRecentOrder);
router.route('/today').get(auth.protect, getOrderToday);
router.route('/day').get(auth.protect, getOrderDay);
router.route('/order-info').get(auth.protect, getOrderInfo);
router.route('/offline-sale').post(offlineSale);
router.route('/').get(getOrders).post(addOrder);
router.route('/:id').delete(auth.protect, deleteOrder);

const configure = (app) => {
  app.use('/api/order', router);
};

export default configure;
