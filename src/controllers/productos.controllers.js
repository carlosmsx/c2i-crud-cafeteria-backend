import Producto from "../models/producto";

export const crearProducto = async (req,res)=>{
    try{
        console.log(req.body);
        //validacion
        //crear un objeto para guardar en la DB
        const productoNuevo = new Producto({
            nombreProducto: req.body.nombreProducto,
            imagen: req.body.imagen,
            precio: req.body.precio,
            categoria: req.body.categoria
        }); //const productoNuevo = new Producto(req.body);
        //guardar efectivamente
        await productoNuevo.save();
        //enviar respuesta al frontend
        //res.status(201); estaría bien asi
        //opcional enviar un mensaje: 
        res.status(201).json({mensaje:'producto creado exitosamente'});
    
        //si algo falla tambien enviar una respuesta
    }
    catch(error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'El producto enviado no pudo ser creado'
        })
    }
}

export const listarProductos = async (req,res)=>{
    try {
        //buscar en la DB la 'collection' de productos
        const listaProductos = await Producto.find();
        //enviar la respuesta al frontend
        res.status(200).json(listaProductos);
    } 
    catch (error) {
        console.log(error);
        res.status(404).json({mensaje: "Error al buscar los productos"})
    }
}

export const obtenerProducto = (req,res)=>{
    res.send('un producto');
}

export const editarProducto = (req,res)=>{
    res.send('editar');
}

export const borrarProducto = (req,res)=>{
    res.send('borrar');
}