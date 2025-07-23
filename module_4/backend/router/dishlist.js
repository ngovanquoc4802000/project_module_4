import express from 'express';
import disListControllers from '../controller/dishListControllers.js';
const router = express.Router();

router.get('/',disListControllers.getDishlistAll)
router.post('/create',disListControllers.createDishlist)

router.route('/:id')
  .get(disListControllers.getDishlistId)
  .put(disListControllers.updateDishlistId)
  .delete(disListControllers.deleteDishlistId)

export default router;
