/* eslint-disable */
import request from 'supertest';
import app from '../src/app';

jest.mock('../src/services/userServices');

describe('User services test suite', () => {
  test('Get signUp user should return verification email', async () => {
    const response = await request(app).get('/api/user');
    expect(response.statusCode).toBe(200);
    const products = response.body;
    expect(products.length).toBeGreaterThan(5);
  });

  test('Sign In user should return a token', async () => {
    console.log('start test')
    const data = {
      email: 'naser@gmail.com', password: '123456',
    };
    
    const response = await request(app).post('/api/user').send(data);
    console.log(response)
    expect(response.statusCode).toBe(200);
    const body = response.body;
    expect(body._id.length).toBe(24);
  });

  test.only('Update user should return updated suer', async () => {
    const newUser = { email: 'newemail@gmail.com', password: '654321'}
    const response = await request(app).put('/api/product/1').send(newUser);
    expect(response.statusCode).toBe(200);
    // const product = response.body;
    // console.log(product)
    // expect.objectContaining({
    //   _id: '1', category: 'food', name: 'apple', price: '20', stock: '10', quantity: '1', available: true, description: 'product description', rating: 3, review: 'good product',
    // });
    // expect(product._id).toBe("1");
  });

  test('  update should return updated product', async () => {

    const data = {
      _id: '1', category: 'food', name: 'orange', price: '20', stock: '10', quantity: '1', available: true, description: 'product description', rating: 3, review: 'good product',
    };
    
    const response = await request(app).put('/api/product/1').send(data);
    expect(response.statusCode).toBe(200);

    const body = response.body;
    expect.objectContaining({
   _id: '1', category: 'food', name: 'apple', price: '20', stock: '10', quantity: '1', available: true, description: 'product description', rating: 3, review: 'good product',
    });
   });
  test('delete product should return  deleted id', async () => {
    const response = await request(app).delete('/api/product/1');
    expect(response.statusCode).toBe(200);
    const body = response.body;
  });

});

