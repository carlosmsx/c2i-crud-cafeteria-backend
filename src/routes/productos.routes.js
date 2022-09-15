import {Router} from 'express';
import { crearProducto, listarProductos, obtenerProducto, editarProducto, borrarProducto } from '../controllers/productos.controllers';

//TODO: import validarProducto from "../helpers/validacionProducto";

const router = Router();

//crear todas las rutas que tienen que ver con los productos
router.route('/productos')
.get(listarProductos)
.post(crearProducto); //TODO: validarProducto,crearProducto);

router.route('/productos/:id')
.get(obtenerProducto)
.put(editarProducto) //TODO: agregar validaciones aqui tambien
.delete(borrarProducto);

export default router;


