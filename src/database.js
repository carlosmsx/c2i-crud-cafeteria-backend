import mongoose from 'mongoose';

//base de datos local
//const url = 'mongodb://localhost:27017/cafeteriac2i';
//base de datos en la nube
const url = 'mongodb+srv://carlosmsx:ePSOItVV9oWvJGfw@cluster0.x3szwek.mongodb.net/cafe2i';
//const url = 'mongodb+srv://mdanielacardozo:mtkZQ5FjoyI9ZEIk@clusterdani.7tfbsbj.mongodb.net/cafeteria';

//Conexion a DB como lo vimos en clase

mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('base de datos conectada');
})


//Otra manera de conectar
/*
const connectDB = async()=>
{
    try {
        await mongoose.connect(url);
        console.log("base de datos conectada");
    } catch (error) {
        console.log(error);
    }
}

connectDB();
*/