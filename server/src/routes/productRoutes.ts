import { Router } from 'express';
import {getProducts, postProduct} from '../controllers/productsController';

const router = Router();

router.get('/', getProducts);
router.post('/', postProduct);

export default router;