import userRouteConfigure from './userRoutes';
import productRouteConfigure from './productRoute';
import categoryRouteConfigure from './categoryRoutes';
import adminRouteConfigure from './adminRoutes';

const configureAllRoutes = (app) => {
  userRouteConfigure(app);
  productRouteConfigure(app);
  categoryRouteConfigure(app);
  adminRouteConfigure(app);
};

export default configureAllRoutes;
