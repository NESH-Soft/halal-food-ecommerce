import mongoose from 'mongoose';

const wishListSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'product',
    },
  ],
},
{
  timestamps: true,
});
const WishList = mongoose.model('wishList', wishListSchema);
export default WishList;
