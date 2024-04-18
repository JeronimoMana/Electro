
const app = require("./src/server")

const PORT = 3000; // Puerto en el que escuchar
const HOST = '192.168.100.71'; // Dirección IP en la que escuchar


app.listen(PORT, () => {
    console.log("Serividor listo en el 3000");
})







