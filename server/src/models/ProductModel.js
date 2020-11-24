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
  specialPrice: {
    type: Number,
    default: 0,
  },
  stock: {
    type: Number,
    default: 0,
  },
  inWishlist: {
    type: Boolean,
    default: false,
  },
  unit: String,
  inCart: {
    type: Boolean,
    default: false,
  },
  quantity: {
    type: Number,
    default: 1,
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
