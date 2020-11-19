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
  const newCategory = await Category.create(category);
  return newCategory;
};

export const deleteCategoryServices = async (id) => {
  const deletedCategory = Category.findByIdAndRemove(id);
  return deletedCategory;
};
