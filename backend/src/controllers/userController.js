const userModel = require('../models/userModel');

const user_api_key = async (API_KEY) => {
    const coincidencia = await userModel.getUserKey(API_KEY);
    
    if (!coincidencia) {
        return null;
    } else {
        return coincidencia;
    }
};

module.exports = {
    user_api_key,
};
