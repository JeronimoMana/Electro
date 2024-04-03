const { Router } = require("express")
const productsController = require("../controllers/productsController")


const productsRouter = Router()

productsRouter.get("/", productsController.getAllProducts)

module.exports = {
    productsRouter
}