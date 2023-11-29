const inscrModels = require('../models/inscrModel');
const consultRegister = require('../models/registerModel');

const getInscr = async (req, res) => {
    const inscrValue = req.params.inscr;
    const result = await inscrModels.getInscr(inscrValue);

    console.log('Globals');
    console.log(userID);
    console.log(clientIpAddress);
    console.log(userConsultant);
    console.log(creciConsultant);
    console.log(imovConsultant);

    const reg = await consultRegister.saveRegister(userID, clientIpAddress, userConsultant, creciConsultant, imovConsultant);

    if (reg){
        return res.status(200).json(result);
    } else {
        return res.status(401).json({ error: 'Erro' });
    }
    
};



module.exports = {
    getInscr
};