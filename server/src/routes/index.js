import userRouteConfigure from './userRoutes';
import productRouteConfigure from './productRoute';
import categoryRouteConfigure from './categoryRoutes';
import adminRouteConfigure from './adminRoutes';
import orderRouteConfigure from './orderRoute';

const configureAllRoutes = (app) => {
  userRouteConfigure(app);
  productRouteConfigure(app);
  categoryRouteConfigure(app);
  adminRouteConfigure(app);
  orderRouteConfigure(app);
};

export default configureAllRoutes;
