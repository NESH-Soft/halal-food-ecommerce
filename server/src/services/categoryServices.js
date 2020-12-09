import models from '../models/index';

const { Category } = models;

export const findCategoryById = async (id) => {
  const category = await Category.findById(id);
  return category;
};

export const getCategoryServices = async () => {
  const category = await Category.find();
  return category;
};

export const addCategoryServices = async (category) => {
  console.log(category,'ser')
  const newCategory = await Category.create(category);
  return newCategory;
};

export const deleteCategoryServices = async (id) => {
  const deletedCategory = Category.findByIdAndRemove(id);
  return deletedCategory;
};
export const addSubCategoryServices = async (id, subCtgry) => {
  console.log(id,subCtgry)
  // eslint-disable-next-line
    const newSubCategory = await Category.findByIdAndUpdate(
    { _id: id },
    { $push: { subCategory: subCtgry } },
    { new: true },
  );
  return newSubCategory;
};
export const deleteSubCategoryServices = async (id, subCtgry) => {
  // eslint-disable-next-line
    const deleteSubCategory = await Category.findByIdAndUpdate(
    { _id: id },
    { $pull: { subCategory: subCtgry } },
    { new: true },
  );
  return deleteSubCategory;
};
