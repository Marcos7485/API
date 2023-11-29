const connection = require('./connection');

const getInscr = async (inscrValue) => {
    global.imovConsultant = inscrValue;
    // Utiliza la cláusula LIKE para buscar la parte específica del valor
    const [tasks] = await connection.execute('SELECT * FROM proprietarios WHERE imovel LIKE ?', [`%${inscrValue}%`]);

    // Mapea los resultados para incluir solo los parámetros deseados
    const data = tasks.map(result => ({
        Nome: result.Nome,
        Documento: result.Documento,
        Id_imov: result.Id_imov,
        Imovel: result.Imovel,
        Endereco: result.Endereco
    }));
    

    return data;
};

module.exports = {
    getInscr
};