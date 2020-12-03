import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  password: {
    type: String,
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  wishList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'product',
    },
  ],
  order: [{
    type: mongoose.Schema.ObjectId,
    ref: 'order',
  }],
},

{
  timestamps: true,
});
const User = mongoose.model('user', userSchema);
export default User;
