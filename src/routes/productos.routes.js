import {Router} from 'express';

const router = Router();

//crear todas las rutas que tienen que ver con los productos
router.route('/').get((req,res)=>{
    res.send('get /');
})

export default router;

//rutas
// app.get('/', (req, res)=>{
//     res.send('primera peticion get'); 
// })

// app.get('/test', (req,res)=>{
//     res.send('test');
// })

