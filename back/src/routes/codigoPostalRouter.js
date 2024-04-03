const { Router } = require("express")
const codigoPostalController = require("../controllers/codigoPostalController")

const codigoPostalRouter = Router()

codigoPostalRouter.get("/", codigoPostalController.getCodigoPostal)

module.exports = { codigoPostalRouter }
