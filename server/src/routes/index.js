import userRouteConfigure from './userRoutes';
import productRouteConfigure from './productRoute';

const configureAllRoutes = (app) => {
  userRouteConfigure(app);
  productRouteConfigure(app);
};

export default configureAllRoutes;
