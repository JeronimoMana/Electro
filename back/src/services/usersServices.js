const bcrypt = require('bcrypt');
module.exports = {
    getUser: async (pool, query) => {
        try {
            const client = await pool.connect();
            const result = await client.query("SELECT name_user,email, password FROM usuarios WHERE email = $1", [query.email]);
            client.release();

            if (result.rows.length === 0) {
                return null;
            }

            const user = result.rows[0];
            const passwordMatch = await bcrypt.compare(query.password, user.password);

            if (!passwordMatch) {
        
                return { message: "Contraseña incorrecta" };
            }

            return { message: "Usuario encontrado", user: user.name_user };
        } catch (error) {
            throw error;
        }
    },
    addUser: async (pool, { name_user, email, password }) => {
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const client = await pool.connect();
            await client.query(`INSERT INTO usuarios (name_user, email, password) VALUES ($1, $2, $3)`, [name_user, email, hashedPassword]);
            client.release();
            return { message: "Usuario cargado con éxito" };
        } catch (error) {
            if (error.code === '23505') {
                let errorMessage = error.message;
                let errorsArray = [];

                if (errorMessage.includes('usuarios_name_user_key')) {
                    errorsArray.push(1, 'El nombre de usuario ya está en uso');
                }

                if (errorMessage.includes('usuarios_email_key')) {
                    errorsArray.push(2, 'El correo electrónico ya está registrado');
                }

                if (errorsArray.length > 0) {
                    throw new Error(JSON.stringify(errorsArray));
                }
            }
            throw error;
        }
    }
}