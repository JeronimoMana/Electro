import 'bootstrap/dist/css/bootstrap.min.css'
import style from './NavBar.module.css'

import SearchBar from "../searchBar/SearchBar"
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { active_modal, disable_modal } from '../../../redux/action';


const NavBar = () => {
    const favorites = useSelector((state) => state.myFavorites)
    const cart = useSelector((state) => state.shoppingCart)
    const modal = useSelector((state) => state.isModal)
    const user = useSelector((state) => state.user)
    const [isDot, setIsDot] = useState(false)
    const [width, setWidth] = useState(window.innerWidth);
    const [countProduct, setCountProduct] = useState(0);
    const [toggler, setToggler] = useState(false)
    const dispatch = useDispatch()


    const handleModal = () => {
        if (!modal) {
            dispatch(active_modal())
        } else {
            dispatch(disable_modal())
        }
    }

    const hangleToggler = () => {
        if (!toggler) {
            setToggler(true)
        } else {
            setToggler(false)
        }
    }

    useEffect(() => {
        setIsDot(favorites.length > 0)
    }, [favorites])
    useEffect(() => {
        setCountProduct(cart.length)
    }, [cart])

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className={`container-fluid p-0 ${width > 640 ? "sticky-top" : ""} ${style.bg}`}>
            <div className={`container-xxl ${style.nav_container} ${style.bg} ${width < 640 ? "d-none" : ""}`}>
                <ul className={`nav float-start `}>
                    <li className="nav-item" >
                        <p className={`nav-link ${style.bg_text}`}>
                            <svg className={style.m_svg} xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 512 512"><path fill="#ff0000" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                            </svg>
                            +54 03516830927</p>
                    </li>
                    <li className="mr-3"><p className={`nav-link ${style.bg_text} `}><svg className={style.m_svg} xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 512 512"  ><path fill="#ff0000" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /></svg>manajeronimo7@gmail.com</p>
                    </li>
                    <li className="mr-3"><p className={`nav-link ${style.bg_text}`}><svg className={style.m_svg} xmlns="http://www.w3.org/2000/svg" height="12" width="10" viewBox="0 0 384 512"><path fill="#ff0000" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>Argentina,Córdoba</p>
                    </li>
                </ul>
                <ul className={`nav float-end`}>
                    <li className="nav-item" onClick={handleModal}><p className={`nav-link ${style.bg_text} ${width < 640 ? "p-0 mt-3" : ""}`}><svg className={style.m_svg} xmlns="http://www.w3.org/2000/svg" height="12" width="10" viewBox="0 0 448 512"><path fill="#ff0000" d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg>{user ? user : "User"}</p></li>
                </ul>
            </div>
            <div className={` ${style.nav_container}`}>
                <div className={`container-xxl d-flex  justify-content-between align-items-center`}>
                    {width < 640 ?
                        <div className="col">
                            <div className=" row ">
                                <div className="col d-flex justify-content-start w-50">
                                    <NavLink to="/">
                                        <img src="../../../../img/logo.png" alt="Logo_empresa" />
                                    </NavLink>

                                </div>
                                <div className="col d-flex justify-content-end w-50">
                                    <button className="navbar-toggler me-4 mb-3" type="button" onClick={hangleToggler} >
                                        <span className="navbar-toggler-icon"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#ff0000" className="bi bi-list" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                                        </svg></span>
                                    </button>
                                </div>
                            </div>
                            {toggler ?
                                <div class="row" >
                                    <ul class={`navbar-nav ms-3 ${style.hamburguesa}`}>
                                        <li class="nav-item">
                                            <svg className={`me-2 ${style.m_svg}`} xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 448 512"><path fill="#ff0000" d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" /></svg>Usuario
                                        </li>
                                        <li class="nav-item">
                                            <svg className="me-2" xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512">
                                                <path fill="#ff0000" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                            Lista de deseos
                                        </li>
                                        <li class="nav-item">
                                            <svg className="position-relative me-2" xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 576 512"><path fill="#ff0000" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                                            </svg>Carrito de compras
                                        </li>
                                    </ul>
                                </div> : ""}

                        </div>
                        :
                        <div className='d-flex justify-content-between' style={{ width: '90%' }}>
                            <NavLink to="/">
                                <img src="../../../../img/logo.png" alt="Logo_empresa" />
                            </NavLink>
                            <SearchBar />
                            <ul className='nav'>
                                <li className={`d-flex flex-column align-items-center ${style.wdt_shop} m-2`}>
                                    <NavLink to="/lista_deseos">
                                        <div className={`position-relative d-flex justify-content-center `}>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512">
                                                <path fill="#ff0000" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg>
                                            {isDot ? <span className={`position-absolute  p-1 bg-danger border rounded-circle  ${style.position}`}>
                                            </span> : ""}
                                        </div>
                                        <p className={style.bg_text}>Lista de Deseos</p>
                                    </NavLink>
                                </li>
                                <li className={`d-flex flex-column align-items-center ${style.wdt_shop} m-2`}>
                                    <NavLink to="/shopping_cart">
                                        <div className={`position-relative `}>
                                            <svg className="position-relative" xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 576 512"><path fill="#ff0000" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                                            </svg>
                                            <span className="position-absolute top-0 end-10 translate-middle badge rounded-pill  p-1 border">
                                                {countProduct > 10 ? "10+" : countProduct}
                                            </span>
                                        </div>
                                        <p className={`text-center ${style.bg_text}`}>Su compra</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>}
                </div>
            </div>
        </div >
    )
}
export default NavBar