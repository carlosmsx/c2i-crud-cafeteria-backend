import {Router} from 'express';
import { crearProducto, listarProductos, obtenerProducto, getAbout } from '../controllers/productos.controllers';

const router = Router();

//crear todas las rutas que tienen que ver con los productos
router.route('/productos')
.get(listarProductos)
.post(crearProducto);

router.route('/productos/:id')
.get(obtenerProducto);

router.route('/about')
.get(getAbout);

export default router;

//rutas
// app.get('/', (req, res)=>{
//     res.send('primera peticion get'); 
// })

// app.get('/test', (req,res)=>{
//     res.send('test');
// })

