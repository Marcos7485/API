const express = require('express');
const inscrController = require('./controllers/inscrController');
const validarApiKey = require('./middlewares/inscrMiddlewares');
const router = express.Router();


router.get('/search/v1/:inscr',validarApiKey, inscrController.getInscr);

module.exports = router;