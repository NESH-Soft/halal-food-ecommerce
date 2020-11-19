import mongoose from 'mongoose';

const adminSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  role: {
    type: String,
    enum: ['admin', 'manager'],
  },
  password: {
    type: String,
  },
},
{
  timestamps: true,
});
const Admin = mongoose.model('admin', adminSchema);
export default Admin;
