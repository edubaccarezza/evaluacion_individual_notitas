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
    },
    edit: function(req, res) {
        db.Nota.update({
            title: req.body.title,
            description: req.body.description,
        }, {
            where: {
                id: req.params.id
            } 
        })
        .then(function(notaEditada){
            res.redirect('/')
        })
    },
    save: function(req,res) {
        // res.send(req.body)
        db.Nota.create({
            title: req.body.title,
            description:req.body.description,
        })
        .then(function(notaCreada) {
            
            res.redirect('../')
        })
    },
    // toDestroy: function(req, res){
    //     db.Nota.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     })
    //     .then(function(){
    //         res.redirect('/')
    //     })
    // },
    delete: function(req, res) {
        db.Nota.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(){
                res.redirect('/')
        })
    }
}