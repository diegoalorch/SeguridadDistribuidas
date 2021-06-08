import { Router } from 'express'

const router = Router();

import * as userCtr from '../controllers/user.controller'

const { checkToken } = require('../auth/token_validation');

router.get('/', checkToken, userCtr.readAllUsers);
router.get('/:id', checkToken, userCtr.readUser);
router.delete('/:id', checkToken, userCtr.delUser);
router.post('/', checkToken, userCtr.createUser);
router.put('/:id', checkToken, userCtr.updateUser);

/*
router.get('/', userCtr.readAllProducto);
router.get('/:id', userCtr.readProducto);
router.delete('/:id', userCtr.delProducto);
router.put('/:id', userCtr.updateProducto);
router.post('/', userCtr.createProducto);
*/

export default router;