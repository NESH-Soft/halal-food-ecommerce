import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
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
},

{
  timestamps: true,
});
const User = mongoose.model('user', userSchema);
export default User;
