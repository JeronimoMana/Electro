import style from './Modal_users.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { disable_modal, set_user } from '../../../redux/action'
import { useState } from 'react'
import { validate } from './validate'
import axios from 'axios'


const Modal_users = () => {
    const modal = useSelector((state) => state.isModal);
    const [validateInput, setValidateInput] = useState({ name_user: "", email: "", password: "" });
    const [errors, setErrors] = useState({ e1: "inicial", e2: "inicial", e3: "inicial" });
    const [login, setLogin] = useState(true)
    const [addUserOk, setAddUserOk] = useState(false)
    const dispatch = useDispatch();

    const handleModal = () => {
        dispatch(disable_modal());
    };

    const handleValidate = (e) => {
        const { name, value } = e.target;
        setValidateInput(prevState => ({
            ...prevState,
            [name]: value
        }));
        const newError = validate({ ...validateInput, [name]: value });
        setErrors(newError);
    };

    const sendRequest = async () => {
        const params = {
            name_user: validateInput.name_user,
            email: validateInput.email,
            password: validateInput.password
        };
        if (login) {
            await axios.get('http://localhost:3000/api/users', { params })
                .then(response => {
                    dispatch(set_user(response.data.user))
                    handleModal()
                })
                .catch(error => {
                    const er = error.response.data;
                    if (er && er.message === "Contraseña incorrecta") {
                        setErrors(prevErrors => ({ ...prevErrors, e3: "Contraseña incorrecta" }));
                    }

                });
        } else {
            await axios.post('http://localhost:3000/api/users', params)
                .then(response => {
                    setAddUserOk(true)
                    setTimeout(() => {
                        setLogin(true)
                        setAddUserOk(false)
                    }, 1000)
                })
                .catch(error => {
                    const er = error.response.data.errors;
                    if (er.includes('El nombre de usuario ya está en uso')) {
                        setErrors(prevErrors => ({ ...prevErrors, e1: 'El nombre de usuario ya está en uso' }));
                    } else if (er.includes('El correo electrónico ya está registrado')) {
                        setErrors(prevErrors => ({ ...prevErrors, e2: 'El correo electrónico ya está registrado' }));
                    }

                });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if ((login && !errors.e2 && !errors.e3) || (!login && !errors.e1 && !errors.e2 && !errors.e3)) {
            await sendRequest(validateInput.name_user);

        }

    };

    const handleLogin = () => {
        if (login) {
            setLogin(false)
        } else {
            setLogin(true)
        }
    }
    return (
        <div className={`${style.container_modal}  ${modal === true ? style.is_modal : ""}`}>
            <div className={style.modal}>
                <button className={style.btn_modal} onClick={handleModal}>X</button>
                {login ?
                    <form className={style.form_modal} onSubmit={handleSubmit}>
                        <h3>Ingrese a su cuenta</h3>
                        <span> Ingrese su email: </span>
                        <div>
                            <input name="email" type="email" placeholder="example@gmail.comm" onChange={handleValidate} />
                            {errors.e2 === "inicial" || errors.e2 ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ff0000" className="bi bi-x-circle ms-2" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00ff00" className="bi bi-check2-circle ms-2" viewBox="0 0 16 16">
                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                            </svg>}
                        </div>
                        <span className={style.error}>{errors.e2 === "inicial" || !errors.e2 ? "" : errors.e2}</span>
                        <span> Ingrese su contraseña: </span>
                        <div>
                            <input name="password" type="password" placeholder="password" onChange={handleValidate} />
                            {errors.e3 === "inicial" || errors.e3 ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ff0000" className="bi bi-x-circle ms-2" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00ff00" className="bi bi-check2-circle ms-2" viewBox="0 0 16 16">
                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                            </svg>}
                        </div>
                        <span className={style.error}>{errors.e3 === "inicial" || !errors.e3 ? "" : errors.e3}</span>
                        <button type='submit'>Ingresar</button>
                        <span className="mt-4 mx-auto">Si no tienes cuenta registrase acá:</span>
                        <button onClick={handleLogin}>Crear Cuenta</button>
                    </form>
                    :
                    addUserOk ?
                        <div className={style.container_add_ok}>
                            <div className={`mb-3 ${style.balloon}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-balloon" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 9.984C10.403 9.506 12 7.48 12 5a4 4 0 0 0-8 0c0 2.48 1.597 4.506 4 4.984M13 5c0 2.837-1.789 5.227-4.52 5.901l.244.487a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.244-.487C4.789 10.227 3 7.837 3 5a5 5 0 0 1 10 0m-6.938-.495a2 2 0 0 1 1.443-1.443C7.773 2.994 8 2.776 8 2.5s-.226-.504-.498-.459a3 3 0 0 0-2.46 2.461c-.046.272.182.498.458.498s.494-.227.562-.495" />
                                </svg>
                            </div>
                            <h3>Usuario cargado con éxito</h3>
                            <p>Espere y será redirigido al formulario de Inicio de sesión</p>
                        </div>
                        : <form className={style.form_modal} onSubmit={handleSubmit}>
                            <h3 className="mx-auto">Cree su usuario</h3>
                            <div className={style.btn_return} onClick={handleLogin}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" strokeWidth="5" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5" />
                                </svg>
                            </div>
                            <span> Ingrese su nombre de usuario: </span>
                            <div>
                                <input name="name_user" placeholder="Ej: user100" onChange={handleValidate} />
                                {errors.e1 === "inicial" || errors.e1 ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ff0000" className="bi bi-x-circle ms-2" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00ff00" className="bi bi-check2-circle ms-2" viewBox="0 0 16 16">
                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                                </svg>}
                            </div>
                            <span className={style.error}>{errors.e1 === "inicial" || !errors.e1 ? "" : errors.e1}</span>
                            <span> Ingrese su email: </span>
                            <div>
                                <input name="email" type="email" placeholder="example@gmail.comm" onChange={handleValidate} />
                                {errors.e2 === "inicial" || errors.e2 ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ff0000" className="bi bi-x-circle ms-2" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00ff00" className="bi bi-check2-circle ms-2" viewBox="0 0 16 16">
                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                                </svg>}
                            </div>
                            <span className={style.error}>{errors.e2 === "inicial" || !errors.e2 ? "" : errors.e2}</span>
                            <span> Ingrese su contraseña: </span>
                            <div>
                                <input name="password" type="password" placeholder="password" onChange={handleValidate} />
                                {errors.e3 === "inicial" || errors.e3 ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ff0000" className="bi bi-x-circle ms-2" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00ff00" className="bi bi-check2-circle ms-2" viewBox="0 0 16 16">
                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                                </svg>}
                            </div>
                            <span className={style.error}>{errors.e3 === "inicial" || !errors.e3 ? "" : errors.e3}</span>

                            <button type='submit'>Crear Cuenta</button>
                        </form>}
            </div>
        </div>
    )
}

export default Modal_users