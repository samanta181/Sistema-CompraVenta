import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import router from './routes';
//const express=require('express');
//const morgan =require('morgan');ss
//const cors = require('cors');

//CONECCION A LA BD MONGODB
mongoose.Promise=global.Promise;
////mongodb+srv://samanta:Aceituna123.@system.fdeodmw.mongodb.net/test
const dbuRL='mongodb://localhost:27017/dbsistema';
mongoose.connect(dbuRL, { useNewUrlParser: true})
.then(mongoose => console.log('conectadooo puerto 27017'))
.catch(err => console.log(err))
;
const app=express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))
app.use('/api',router);
app.set('port', process.env.PORT || 3000)

app.get('/hola', (req, res) => {
    res.send('Hello World!')
  })
app.listen(app.get('port'), ()=>{
    console.log('server on port ' + app.get('port'));
    
});