import { validationResult } from "express-validator";
import Producto from "../models/producto";

export const crearProducto = async (req,res)=>{
    try{
        console.log(req.body);
        //validacion
        const errors = validationResult(req);
        if (!errors.isEmpty())
        {
            //return res.status(400).json({errors: errors.array()}); //muestra todos los errores encontrados
            return res.status(400).json({errors: errors.mapped()}); //muestra el primer error que se rompe
        }
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

export const obtenerProducto = async (req,res)=>{
    try {
        console.log(req.params)
        //buscar en la DB el producto
        const productoBuscado = await Producto.findById(req.params.id);
        //enviar la respuesta al frontend
        res.status(200).json(productoBuscado);
    } 
    catch (error) {
        console.log(error);
        res.status(404).json({mensaje: "producto no encontrado"})
    }
}

export const editarProducto = async (req,res)=>{
    try {
        //validar
        console.log(req.params.id);
        console.log(req.body);
        //buscar
        await Producto.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({mensaje: "edicion ok"});
    } catch (error) {
        console.log(error);
        res.status(400).json({mensaje:"edicion error"});
    }
}

export const borrarProducto = async (req,res)=>{
    try {
        //buscar un producto por el id y luego borrarlo
        await Producto.findByIdAndDelete(req.params.id);
        res.status(200).json({mensaje: "el producto fue eliminado correctamente"});
    } catch (error) {
        console.log(error);
        res.status(400).json({mensaje: 'Error al intentar borrar el producto'});
    }
}