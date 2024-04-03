const fs = require('fs');
const path = require('path');


module.exports = {
    getPostal: async (codigoPostal) => {
        try {
            const filePath = path.join(__dirname, 'Codigos-Postales-Argentina.json');
            const fileData = await new Promise((resolve, reject) => {
                fs.readFile(filePath, 'utf8', (error, data) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
            });
            const jsonData = JSON.parse(fileData);
            const datosFiltrados = jsonData.find(item => item.CP === Number(codigoPostal));
            return datosFiltrados;
        } catch (error) {
            console.error("Error al leer el archivo:", error);
            throw error;
        }
    }
};