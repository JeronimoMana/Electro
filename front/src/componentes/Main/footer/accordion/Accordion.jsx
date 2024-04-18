import { useState } from "react";
import style from "./Accordion.module.css";

const Accordion = () => {
    const [accordionState, setAccordionState] = useState({
        categorias: false,
        informacion: false,
        servicios: false
    });

    const handleAccordion = (elemento) => {

        const isElementActive = accordionState[elemento];
        const newState = { ...accordionState };

        if (isElementActive) {
            newState[elemento] = false;
        } else {

            Object.keys(newState).forEach(key => {
                newState[key] = false;
            });
            newState[elemento] = true;
        }

        setAccordionState(newState);


    };

    return (
        <div>
            <div id="categorias" className={`${style.item} ${accordionState.categorias ? style.expanded : ""}`} onClick={() => handleAccordion("categorias")}>
                <div className="d-flex justify-content-between mt-2">
                    <h3 className="ms-2 mt-2">Categorías</h3>
                    <div className="me-3">
                        {accordionState.categorias ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-arrow-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                        </svg>}
                    </div>
                </div>
                {accordionState.categorias ?
                    <div className={style.info_accordion}>
                        <ul>
                            <li>Ofertas</li>
                            <li>Notebook</li>
                            <li>Smartphones</li>
                            <li>Camaras</li>
                            <li>Accesorios</li>
                        </ul>
                    </div>
                    : ""}
            </div>
            <div id="informacion" className={`${style.item} ${accordionState.informacion ? style.expanded : ""}`} onClick={() => handleAccordion("informacion")}>
                <div className="d-flex justify-content-between mt-2">
                    <h3 className="ms-2 mt-2">Información</h3>
                    <div className="me-3">
                        {accordionState.informacion ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-arrow-up" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                        </svg>}
                    </div>
                </div>
                {accordionState.informacion ?
                    <div className={style.info_accordion}>
                        <ul>
                            <li>Sobre Nosotros</li>
                            <li>Contacto</li>
                            <li>Políticas de privacidad</li>
                            <li>Pedidos Y Devoluciones</li>
                            <li>Términos y Condiciones </li>
                        </ul>
                    </div>
                    : ""}
            </div>
            <div id="servicios" className={`${style.item} ${accordionState.servicios ? style.expanded : ""}`} onClick={() => handleAccordion("servicios")}>
                <div className="d-flex justify-content-between mt-2">
                    <h3 className="ms-2 mt-2">Servicios</h3>
                    <div className="me-3">
                        {accordionState.servicios ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-arrow-up" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                        </svg>}
                    </div>
                </div>
                {accordionState.servicios ?
                    <div className={style.info_accordion}>
                        <ul>
                            <li>Mi Cuenta</li>
                            <li>Ver Carrito</li>
                            <li>Lista de Deseos</li>
                            <li>Seguir mi pedido</li>
                            <li>Ayuda</li>
                        </ul>
                    </div>
                    : ""}
            </div>
        </div>
    );
};

export default Accordion;
