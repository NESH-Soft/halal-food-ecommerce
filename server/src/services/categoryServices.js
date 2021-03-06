import mongoose from 'mongoose'
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
export const addSubCategoryServices = async (id, subCat) => {
  // eslint-disable-next-line
    const newSubCategory = await Category.findByIdAndUpdate(
    { _id: id },
    { $push: { subCategory: subCat } },
    { new: true },
  );
  return newSubCategory;
};
export const deleteSubCategoryServices = async (catId, subCatId) => {
  const deleteSubCategory = await Category.findByIdAndUpdate(
    { _id: catId },
    { $pull: { subCategory: { _id: subCatId } } },
    { new: true },
  );
  return deleteSubCategory;
};
