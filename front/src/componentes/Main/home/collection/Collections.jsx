import { useState } from 'react'
import style from './Collection.module.css'



const Collections = () => {
    const [isHover, setIsHover] = useState(false)
    const handleHover = () => {
        if (!isHover) {
            setIsHover(true)
        } else {
            setIsHover(false)
        }
    }
    return (
        <div className={`container-fluid`}>
            <div className="container-xxl mt-5">
                <div className="row row row-cols-1 row-cols-md-3 g-4 ms-5">
                    <div className="col">
                        <div className={`card h-100 ${style.card_decoration}`}>
                            <img src="../../../../../img/product01.png" className={style.wdt_img} alt="asdasd" />
                            <div className={style.txt}>
                                <h3 className="px-2 pt-1 mx-3 mt-2 mb-1">Colección <br />Notebook</h3>
                                <a href="store_notebook.html" className="ps-4 ">Nuevos </a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={`card h-100 ${style.card_decoration}`}>
                            <img src="../../../img/product02.png" className={style.wdt_img} alt="asdasd" />
                            <div className={style.txt}>
                                <h3 className="px-2 pt-1 mx-3 mt-2 mb-1">Colección <br />Accesorios</h3>
                                <a href="store_notebook.html" className="ps-4  ">Nuevos </a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={!isHover ? "#ffffff" : "#000000"} className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={`card h-100 ${style.card_decoration}`}>
                            <img src="../../../img/producto10.png" className={`my-auto ${style.wdt_img}`} alt="asdasd" />
                            <div className={style.txt}>
                                <h3 className="px-2 pt-1 mx-3 mt-2 mb-1">Colección <br />Camaras</h3>
                                <a href="store_notebook.html" className="ps-4 ">Nuevos </a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={!isHover ? "#ffffff" : "#000000"} className="bi bi-arrow-right" viewBox="0 0 16 16" onMouseEnter={handleHover} onMouseDown={handleHover}>
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Collections