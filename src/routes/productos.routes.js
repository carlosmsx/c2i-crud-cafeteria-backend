import {Router} from 'express';
import { crearProducto, listarProductos, obtenerProducto, editarProducto, borrarProducto } from '../controllers/productos.controllers';

const router = Router();

//crear todas las rutas que tienen que ver con los productos
router.route('/productos')
.get(listarProductos)
.post(crearProducto);

router.route('/productos/:id')
.get(obtenerProducto)
.put(editarProducto)
.delete(borrarProducto);

export default router;


