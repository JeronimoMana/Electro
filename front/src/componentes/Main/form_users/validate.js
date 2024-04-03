
export const validate = (state) => {
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{3,}))$/
    const regexPassword = /^(?=.*\d)(?=.*[!-\/:-@\[-`{-~])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
    const error = {};

    if (state.name_user.length < 4) {
        error.e1 = "El nombre de usario debe contener al menos 4 cáracteres"
    }

    if (!regexEmail.test(state.email)) {
        error.e2 = "Email inválido";
    }

    if (!regexPassword.test(state.password)) {
        error.e3 = "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un carácter no alfanumérico.";
    }

    return error;
}