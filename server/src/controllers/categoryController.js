import {
  getCategoryServices,
  addCategoryServices,
  deleteCategoryServices,
  addSubCategoryServices,
  deleteSubCategoryServices,
} from '../services/categoryServices';
import asyncHandler from '../utils/async';
import { NotFound } from '../utils/error';

export const getCategory = asyncHandler(async (req, res) => {
  const category = await getCategoryServices();
  if (!category.length) return res.status(200).json({ success: true, msg: 'No category created yet' });
  return res.status(200).json({ success: true, category, msg: 'all category fetch' });
});

export const addCategory = asyncHandler(async (req, res) => {
  console.log(req.body)
  const newCategory = await addCategoryServices(req.body);
  return res.status(201).json({ success: true, newCategory, msg: 'category added successfully' });
});

export const deleteCategory = asyncHandler(async (req, res) => {
  const deletedCategory = await deleteCategoryServices(req.params.id);
  if (!deletedCategory) throw NotFound('Category not found');
  return res.status(200).json({ success: true, deletedCategory, msg: 'category delete successfully' });
});
export const addSubCategory = asyncHandler(async (req, res) => {
  const newCategory = await addSubCategoryServices(req.params.id, req.body);
  return res.status(201).json({ success: true, newCategory, msg: 'Subcategory added successfully' });
});
export const deleteSubCategory = asyncHandler(async (req, res) => {
  const deletedSubCategory = await deleteSubCategoryServices(req.params.id, req.body);
  if (!deletedSubCategory) throw NotFound('Category not found');
  return res.status(200).json({ success: true, deletedSubCategory, msg: 'Sub category delete successfully' });
});
