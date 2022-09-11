import {Router} from 'express';
import { crearProducto, listarProductos, obtenerProducto, editarProducto, borrarProducto } from '../controllers/productos.controllers';
import {check} from 'express-validator';

const router = Router();

//crear todas las rutas que tienen que ver con los productos
router.route('/productos')
.get(listarProductos)
.post([
    check('nombreProducto','El nombre del producto es obligaorio').notEmpty(),
    check('nombreProducto','El producto debe tener entre 2 y 50 caracteres').isLength({min: 2, max: 50}),
    check('precio', 'El precio es un valor obligatorio').notEmpty(),
    check('precio').custom((value)=>{
        if (value>=0 && value<=9999) 
            return true;
        else
            throw new Error('El precio debe estar entre 0 y 9999');
    })
], crearProducto);

router.route('/productos/:id')
.get(obtenerProducto)
.put(editarProducto)
.delete(borrarProducto);

export default router;


