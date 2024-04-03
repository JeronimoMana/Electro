const productsServices = require("../services/productsServices")


module.exports = {
    getAllProducts: async (req, res) => {
        try {
            const products = await productsServices.getProducts(req.pool)
            res.status(200).json(products)

        } catch (error) {
            res.status(500).json({
                error: "Error de el servidor"
            })
        }
    }
}