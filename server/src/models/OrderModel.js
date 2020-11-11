import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  cart: [
    {
      productId: String,
      quantity: Number,
    },
  ],
  shipping: {
    type: mongoose.Schema.ObjectId,
    ref: 'shipping',
  },
  status: {
    type: String,
    enum: ['pending', 'active', 'delivered', 'canceled'],
  },
},
{
  timestamps: true,
});

const order = mongoose.model('order', orderSchema);
export default order;
