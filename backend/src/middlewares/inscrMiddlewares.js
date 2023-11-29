require('dotenv').config();

const express = require('express');
const userController = require('../controllers/userController');
const app = express();

// Middleware para validar API_KEY
const validarApiKey = async (req, res, next) => {
    const apiKey = req.headers['api-key'];
    // const apiKey = '?Ac!%59IwH5N2kJjhWBWk4+9hDpjlBHpYb80wSyd1LQRsRC!A!kHl?&cDkox§gQW8uK8i£JU8ZtRFd4W'; 

    // Obtener la dirección IP del cliente
    const ipAddress = req.ip;

    // Guardar la dirección IP en una variable global
    global.clientIpAddress = ipAddress;

    if (!apiKey) {
        return res.status(401).json({ error: 'ACCESS DENIED' });
    }

    // Usa userController.user_api_key como una función asincrónica
    const usuario = await userController.user_api_key(apiKey);
    console.log(usuario);

    if (!usuario) {
        return res.status(403).json({ error: 'Acceso denegado: API_KEY no válida' });
    }
    if (usuario == '') {
        return res.status(403).json({ error: 'Acceso denegado: API_KEY no válida' });
    }

    global.userID = usuario[0].id;
    global.userConsultant = usuario[0].name;
    global.creciConsultant = usuario[0].creci;

    next();
};

module.exports = validarApiKey;


