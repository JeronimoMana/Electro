
import style from './Navigation.module.css'
import { NavLink } from 'react-router-dom'
const Navigation = () => {
    return (
        <div className={`container-fluid p-0 my-4 ${style.navigation_container}`}>
            <div className="container-xxl">

                <ul className="nav ">
                    <li className="nav-item">
                        <button className={`nav-link ${style.nav_main}`}>
                            <NavLink to="/home">Inicio</NavLink></button>
                    </li>
                    <li className="nav-item">
                        <button className={`nav-link ${style.nav_main}`}>
                            <NavLink to="/shop_notebook">Notebook</NavLink>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className={`nav-link ${style.nav_main}`}>
                            <NavLink to="/shop_smartphone">Smartphones</NavLink>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className={`nav-link ${style.nav_main}`}>
                            <NavLink to="/shop_accesories">Accessories</NavLink>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className={`nav-link ${style.nav_main}`}>
                            <NavLink to="/shop_camera">Cameras</NavLink>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation