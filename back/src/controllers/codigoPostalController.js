const codigoPostalServices = require("../services/codigoPostalServices")
module.exports = {
    getCodigoPostal: async (req, res) => {
        try {
            const codigo = req.query.codigo; 
            const codigoPostal = await codigoPostalServices.getPostal(codigo);
            res.status(200).json(codigoPostal);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "Error del servidor"
            });
        }
    }
};