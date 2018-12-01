var express= require('express');
var router = express.Router();
var filtroController = require('../controlllers/FiltroControllers');

router.get('/',filtroController.index);

router.post('/',filtroController.store);

router.delete('/:id',filtroController.delete);
module.exports = router;