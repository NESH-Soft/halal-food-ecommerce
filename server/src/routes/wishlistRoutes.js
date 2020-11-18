import express from 'express';
import {
  addWishList,
  getWishList,
  deleteWishList,
} from '../controllers/wishListController';

const router = express.Router();

router.route('/').get(getWishList).post(addWishList);

router.route('/:id').delete(deleteWishList);

const configure = (app) => {
  app.use('/api/wishlist', router);
};

export default configure;
