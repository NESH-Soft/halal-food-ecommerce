import express from 'express';
import auth from '../middlewares/auth';
import {
  addWishList,
  getWishList,
  deleteWishList,
} from '../controllers/wishListController';

const router = express.Router();

router.route('/').get(auth.protectUser, getWishList).post(auth.protectUser, addWishList);

router.route('/:id').delete(auth.protectUser, deleteWishList);

const configure = (app) => {
  app.use('/api/wishlist', router);
};

export default configure;
