import mongoose from 'mongoose';

const wishListSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  street: {
    type: String,
  },
  postalCode: {
    type: Number,
  },
  city: {
    type: String,
  },
  phone: {
    type: Number,
  },
},
{
  timestamps: true,
});
const WishList = mongoose.model('wishList', wishListSchema);
export default WishList;
