import express, { response } from 'express';
// const express = require('express');

const app = express();

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), ()=>{
    console.log("entramos en el puerto "+app.get('port'));
})

app.get('/', (req, res)=>{
    res.send('primera peticion get'); 
})