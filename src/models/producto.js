import mongoose, {Schema} from 'mongoose';

const productoSchema = new Schema({
    nombreProducto: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50,
        unique: true
    },
    imagen: {
        type: String,
        required: true        
    },
    precio: {
        type: Number,
        required: true,
        min: 0,
        max: 9000
    },
    categoria: {
        type: String,
        required: true,
        maxLength: 40
    }    
});

const Producto = mongoose.model('producto', productoSchema);

export default Producto;