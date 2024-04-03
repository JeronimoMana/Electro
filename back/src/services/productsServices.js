
module.exports = {

    getProducts: async (pool) => {
        try {
            const client = await pool.connect();
            const result = await client.query('SELECT * FROM productos;');
            client.release();
            return result.rows;
        } catch (error) {
            console.error('Error al obtener productos desde la base de datos:', error);
            throw error; 
        }
    }
};