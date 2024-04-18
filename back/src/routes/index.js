const { Router } = require("express")
const { productsRouter } = require("./productsRouter")
const { codigoPostalRouter } = require("./codigoPostalRouter")
const { usersRouter } = require("./usersRouter")



const router = Router()



router.use("/api/products", productsRouter)
router.use("/api/codigo_postal", codigoPostalRouter)
router.use("/api/users", usersRouter)


module.exports = router