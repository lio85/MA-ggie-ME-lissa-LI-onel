let inicioController = {
    index: function (req,res) {
        res.render('index');
        // res.render('index');
    },
    carrito: function (req,res) {
        res.render('carrito');
    }, 
}

module.exports= inicioController;
