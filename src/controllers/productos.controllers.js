import Producto from "../models/producto";

export const crearProducto = async (req, res) => {
    try {
        console.log(req.body);
        //validacion
        //crear un objeto para guardar en la DB
        const productoNuevo = new Producto({
            nombreProducto: req.body.nombreProducto,
            imagen: req.body.imagen,
            precio: req.body.precio,
            categoria: req.body.categoria,
        }); //const productoNuevo = new Producto(req.body);
        //guardar efectivamente
        await productoNuevo.save();
        //enviar respuesta al frontend
        //res.status(201); estaría bien asi
        //opcional enviar un mensaje:
        res.status(201).json({ mensaje: "producto creado exitosamente" });

        //si algo falla tambien enviar una respuesta
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "El producto enviado no pudo ser creado",
        });
    }
};

export const listarProductos = async (req, res) => {
    try {
        //buscar en la DB la 'collection' de productos
        const listaProductos = await Producto.find();
        //enviar la respuesta al frontend
        res.status(200).json(listaProductos);
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: "Error al buscar los productos" });
    }
};

export const obtenerProducto = async (req, res) => {
    try {
        console.log(req.params);
        //buscar en la DB el producto
        const productoBuscado = await Producto.findById(req.params.id);
        //enviar la respuesta al frontend
        res.status(200).json(productoBuscado);
    } catch (error) {
        console.log(error);
        res.status(404).json({ mensaje: "producto no encontrado" });
    }
};

export const editarProducto = async (req, res) => {
    //console.log(req.body);
    //res.send('editar');
    try {
        const productoEditado = new Producto({
            _id: req.body._id,
            nombreProducto: req.body.nombreProducto,
            imagen: req.body.imagen,
            precio: req.body.precio,
            categoria: req.body.categoria,
        }); //const productoEditado = new Producto(req.body);
        //guardar efectivamente
        await productoEditado.update(productoEditado);
        //enviar respuesta al frontend
        //opcional enviar un mensaje:
        res.status(200).json({ mensaje: "producto creado exitosamente" });
    } catch (error) {
        console.log(error);
    }

    //si algo falla tambien enviar una respuesta
};

/*
export const borrarProducto = async(req, res) => {
    res.send("borrar");
    try {
        await Producto.findByIdAndDelete(body._id);
    } catch (error) {
        console.log(error);
    }
};
*/

export const borrarProducto = async(req, res)=>{
    try{
     //buscar un producto por el id en la collection de productos de la BD y luego borrar
     await Producto.findByIdAndDelete(req.params.id);
     res.status(200).json({
         mensaje: 'El producto fue eliminado correctamente'
     })
    }catch(error){
     console.log(error);
     res.status(400).json({
         mensaje:'Error al intentar borrar el producto'
     })
    }
 }