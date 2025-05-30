import { Router } from 'express';
import {findProductByID, findProductBySearch, getProducts, postProduct} from '../controllers/productsController';

const router = Router();

router.get('/', getProducts);
router.get('/search', findProductBySearch);
router.get('/search/:id', findProductByID);

router.post('/', postProduct);

export default router;