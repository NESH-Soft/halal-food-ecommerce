import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  paymentId: {
    type: String,
  },
  cart: [],
  shipping: {
    line1: { type: String },
    city: { type: String },
    postalCode: { type: String },
    region: { type: String },
  },
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'active', 'delivered', 'canceled', 'offlineSale'],
  },
  shippingCost: {
    type: Number,
  },
  subTotal: {
    type: Number,
  },
  tax: {
    type: Number,
  },
  totalPrice: Number,
},
{
  timestamps: true,
});

const order = mongoose.model('order', orderSchema);
export default order;
