const taskModels = require('../models/inscrModel');

const getInscr = async (req, res) => {
    const inscrValue = req.params.inscr;
    const tasks = await taskModels.getInscr(inscrValue);

    return res.status(200).json(tasks);
};



module.exports = {
    getInscr
};