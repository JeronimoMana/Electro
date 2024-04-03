const usersServices = require("../services/usersServices")

module.exports = {
    getUsers: async (req, res) => {
        try {
            const user = await usersServices.getUser(req.pool, req.query);
            if (user.message === "Contraseña incorrecta") {
                return res.status(401).json(user);
            }
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({
                error: "Error al obtener los usuarios del servidor"
            });
        }
    },
    addUsers: async (req, res) => {
        try {

            if (!req.body || !req.body.name_user || !req.body.email || !req.body.password) {
                return res.status(400).json({ error: 'Missing email or password' });
            }

            const user = await usersServices.addUser(req.pool, {
                name_user: req.body.name_user,
                email: req.body.email,
                password: req.body.password
            });

            return res.status(200).json(user);
        } catch (error) {
            let errorsArray = [];
            if (error.message) {
                errorsArray = JSON.parse(error.message);
            } else {
                errorsArray.push('Internal server error');
            }
            return res.status(400).json({ errors: errorsArray });
        }
    }

}