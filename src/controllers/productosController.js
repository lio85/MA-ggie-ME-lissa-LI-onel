let productosController= {
    creacionProducto: function (req,res) {
        res.render('products/creacionProducto');
    },
    detalleProducto: function (req,res) {
         res.render('products/detalleProducto');
    }, 
    edicionProducto: function (req,res) {
        res.render('products/edicionProducto');
    },
    listadoProducto: function (req,res) {
        res.render('products/listadoProducto');
    },
}


module.exports= productosController;

