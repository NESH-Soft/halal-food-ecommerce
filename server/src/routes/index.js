import userRouteConfigure from './userRoutes';
import productRouteConfigure from './productRoute';
import categoryRouteConfigure from './categoryRoute';
import adminRouteConfigure from './adminRoutes';
import orderRouteConfigure from './orderRoute';
import wishlistRoutes from './wishlistRoutes';

const configureAllRoutes = (app) => {
  userRouteConfigure(app);
  productRouteConfigure(app);
  categoryRouteConfigure(app);
  adminRouteConfigure(app);
  orderRouteConfigure(app);
  wishlistRoutes(app);
};

export default configureAllRoutes;
