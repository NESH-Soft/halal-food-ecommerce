import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  customer: {
    email: String,
  },
  paymentId: {
    type: String,
  },
  cart: [],
  shipping: {
    type: mongoose.Schema.ObjectId,
  },
  status: {
    type: String,
    enum: ['pending', 'active', 'delivered', 'canceled'],
  },
  totalPrice: Number,
},
{
  timestamps: true,
});

const order = mongoose.model('order', orderSchema);
export default order;
