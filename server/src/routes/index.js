import userRouteConfigure from './userRoutes';
import productRouteConfigure from './productRoute';
import categoryRouteConfigure from './categoryRoutes';

const configureAllRoutes = (app) => {
  userRouteConfigure(app);
  productRouteConfigure(app);
  categoryRouteConfigure(app);
};

export default configureAllRoutes;
