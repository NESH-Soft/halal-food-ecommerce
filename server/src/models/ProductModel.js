import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  category: {
    type: String,
  },
  subCategory: {
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
  productType: {
    type: String,
  },
  stock: {
    type: Number,
    default: 0,
  },

  unit: String,
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
  review: [
    {
      customerName: {
        type: String,
      },
      email: {
        type: String,
      },
      rating: {
        type: Number,
      },
      review: {
        type: String,
      },
    },
  ],
},
{
  timestamps: true,
});
productSchema.index({ category: 'text', name: 'text', description: 'text' });
const Product = mongoose.model('product', productSchema);
export default Product;
