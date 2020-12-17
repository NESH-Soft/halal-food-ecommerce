import request from 'supertest';
import app from '../src/app';

jest.mock('../src/services/productServices');

describe('product services test suite', () => {
//   test('get all product should return prouct array', async () => {
//     const response = await request(app).get('/api/product');
//     expect(response.statusCode).toBe(200);
//     const products = response.body;
//     expect(products.length).toBeGreaterThan(5);
//   });
//   test('add new product should return new product', async () => {
//     console.log('start test')
//     const data = {
//       _id: '3', category: 'food', name: 'apple', price: '20', stock: '10', quantity: '1', available: true, description: 'product description', rating: 3, review: 'good product',
//     };
    
//     const response = await request(app).post('/api/product').send(data);
//     expect(response.statusCode).toBe(201);
//     const body = response.body;
//     expect(body._id.length).toBe(24);
//   });

//  test('get single  product should return product', async () => {
//     const response = await request(app).get('/api/product/1');
//     expect(response.statusCode).toBe(200);
//     const product = response.body;
//     console.log(product)
//     expect.objectContaining({
//       _id: '1', category: 'food', name: 'apple', price: '20', stock: '10', quantity: '1', available: true, description: 'product description', rating: 3, review: 'good product',
//     });
//     // expect(product._id).toBe("1");
//   });

  // test('  update should return updated product', async () => {

  //   const data = {
  //     _id: '1', category: 'food', name: 'orange', price: '20', stock: '10', quantity: '1', available: true, description: 'product description', rating: 3, review: 'good product',
  //   };
    
  //   const response = await request(app).put('/api/product/1').send(data);
  //   expect(response.statusCode).toBe(200);

  //   const body = response.body;
  //   expect.objectContaining({
  //  _id: '1', category: 'food', name: 'apple', price: '20', stock: '10', quantity: '1', available: true, description: 'product description', rating: 3, review: 'good product',
  //   });
  //  });
  // test('delete product should return  deleted id', async () => {
  //   const response = await request(app).delete('/api/product/1');
  //   expect(response.statusCode).toBe(200);
  //   const body = response.body;
  // });

});
