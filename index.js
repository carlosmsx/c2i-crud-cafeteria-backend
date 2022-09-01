import express, { response } from 'express'; // const express = require('express');
import morgan from 'morgan'; 
import cors from 'cors';
import './src/database';

const app = express();

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), ()=>{
    console.log("entramos en el puerto "+app.get('port'));
})

//middlewares
app.use(morgan('dev'));
app.use(cors()); 
//...middlewares disponibles en express
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//...cargar un archivo estatico
app.use(express.static("./public"));

//rutas
// app.get('/', (req, res)=>{
//     res.send('primera peticion get'); 
// })

app.get('/test', (req,res)=>{
    res.send('test');
})

