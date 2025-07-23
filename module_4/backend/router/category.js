import express from 'express';
import categoryControllers from '../controller/categoryControllers.js';
const router = express.Router();

router.get('/',categoryControllers.getCategoryAll)
router.post('/create',categoryControllers.createCategory)
router.get('/api/v1/product',categoryControllers.categoryPagination)

router.route('/:id')
  .get(categoryControllers.getCategoryId)
  .put(categoryControllers.updateCategoryId)
  .delete(categoryControllers.deleteCategoryId)

export default router;
