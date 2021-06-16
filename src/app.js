const express = require ('express');
const app = express();
const path = require ('path');
let productosRoute= require('./routes/productosRoute');
let inicioRoute= require('./routes/inicioRoute');
let usuarioRoute= require('./routes/usuarioRoute');


app.listen(3000, () => {
    console.log('Servidor 3000 corriendo');
})

app.use(express.static(path.resolve(__dirname , '../public')));

app.set ('view engine','ejs');

app.use('/', inicioRoute);

app.use('/producto', productosRoute);

app.use('/usuario', usuarioRoute);





   
