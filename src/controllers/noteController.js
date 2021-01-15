let db = require('../database/models/index')

module.exports = {
    index: function(req, res) {
        // db.sequelize.query('SELECT * FROM notas')
        db.Nota.findAll()
        .then(function(notas) {
            res.render('index', {
                notas: notas
            }) 
        })
        // res.send(notas)
        // res.render('index');
    },
    detail: function(req, res) {
        // db.sequelize.query("SELECT * FROM notas WHERE id =" + req.params.id)
        db.Nota.findByPk(req.params.id)
        .then(function(unaNota) {
            res.render('detail', {
                unaNota: unaNota
            })
        })
    }    
}