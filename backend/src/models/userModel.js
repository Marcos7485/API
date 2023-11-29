const connection = require('./connection');

const getUserKey = async (API_KEY) => {
    // Utiliza la cláusula LIKE para buscar la parte específica del valor
    const [user] = await connection.execute('SELECT * FROM users WHERE BINARY apiKEY = ?', [`${API_KEY}`]);

    return user;
};

module.exports = {
    getUserKey
};