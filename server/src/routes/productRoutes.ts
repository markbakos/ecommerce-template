import { Router } from 'express';
import {findProductBySearch, getProducts, postProduct} from '../controllers/productsController';

const router = Router();

router.get('/', getProducts);
router.get('/search', findProductBySearch);

router.post('/', postProduct);

export default router;