import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  category: {
    type: String,
  },
  name: {
    type: String,
  },
  price: {
    type: Number,
    default: 0,
  },
  stock: {
    type: Number,
    default: 0,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  available: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  cloudinaryId: {
    type: String,
  },
  rating: {
    type: Number,
    default: 0,
  },
  review: {
    type: String,
  },
},
{
  timestamps: true,
});
productSchema.index({ category: 'text', name: 'text', description: 'text' });
const Product = mongoose.model('product', productSchema);
export default Product;
