import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
  name: {
    type: String,
  },
},
{
  timestamps: true,
});
const Category = mongoose.model('category', categorySchema);
export default Category;
