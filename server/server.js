require('./config/config')

const express = require('express')
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.URLDB,(err,db)=>{
    if(err) throw err;
    
    console.log('BASE DE DATOS ONLINE');
});

const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(require('./routes/usuario'));
 
app.listen(process.env.PORT,()=>{
    console.log("Escuchando el puerto" + process.env.PORT);
})