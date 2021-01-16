const express = require('express');
const router = express.Router();

const noteController = require ("../controllers/noteController");


// CREAR
router.get('/', noteController.index);
router.post('/', noteController.save);

//EDITAR
router.get('/detail/:id', noteController.detail);
router.post('/detail/:id', noteController.edit);

//BORRAR
router.delete('/:id', noteController.delete)
// router.post('/:id', noteController.toDestroy);


module.exports = router;