let usuarioController= {
    login: function (req,res) {
        res.render('users/login');
    },
    perfil: function (req,res) {
        res.render('users/perfil');
    }, 
    registro: function (req,res) {
        res.render('users/registro');
    }, 
}

module.exports= usuarioController;