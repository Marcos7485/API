require('dotenv').config();

const express = require('express');
const user_api_key = require('../controllers/userController');
const app = express();

// Middleware para validar API_KEY
const validarApiKey = (req, res, next) => {
    const apiKey = req.headers['api-key'];

    if (!apiKey) {
        return res.status(401).json({ error: 'ACCESS DENIED' });
    }

    // (Asegúrate de usar un método seguro para realizar esta consulta, como consultas preparadas)
    const usuario = user_api_key(apiKey);

    if (!usuario) {
        return res.status(403).json({ error: 'Acceso denegado: API_KEY no válida' });
    }

    // Pasa al siguiente middleware si la API_KEY es válida
    next();
};

module.exports = validarApiKey;