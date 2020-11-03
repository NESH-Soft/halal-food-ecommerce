import userModel from '../../models/index';
import ProductModel from '../../models/index';

const products = [
  {
    _id: '1', category: 'food', name: 'apple', price: '20', stock: '10', quantity: '1', available: true, description: 'product description', rating: 3, review: 'good product',
  },
  {
    _id: '2', category: 'food', name: 'apple', price: '20', stock: '10', quantity: '1', available: true, description: 'product description', rating: 3, review: 'good product',
  },
];

//  eslint-disable-next-line
export const getProductsServices = async () => {
  return products;
};

export const addProductServices = async (product) => {
  const model = new ProductModel.Product(product);
  products.push(model);
  return model;
};

export const getProductServices = async (id) => {
  //  eslint-disable-next-line
  const model = products.find((product) => product._id === id);
  return model;
};

export const updateProductServices = async (id, data) => {
  //  eslint-disable-next-line
  let model = products.find((p) => p._id === id);
  // console.log(model)
  if (model) {
    model = data;
    return model;
   
  }
  // users[0].userName = user.userName;
  // return users[0];
};

export const deleteProductServices = async (id) => {
  //  eslint-disable-next-line
  const model = products.find((p) => p._id === id);
  if (model) {
    //  eslint-disable-next-line
    model.delete
   
    return model;
  }
};
