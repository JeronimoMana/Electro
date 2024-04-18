import { useSelector } from "react-redux";
import Card from "../../Main/home/card/Card";
import style from './ShoppingCart.module.css'
import axios from "axios";
import { useEffect, useState } from "react";

const ShoppingCart = () => {
    const cart = useSelector(state => state.shoppingCart);
    const [cartLocal, setCartLocal] = useState([]);
    const [envio, setEnvio] = useState(null);
    const [isDiv, setIsDiv] = useState(false);
    const [width, setWidth] = useState(window.innerWidth)
    let total = 0;


    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    const provinciasCostosEnvio = [
        { provincia: "Buenos Aires", costo: 50 },
        { provincia: "Capital Federal", costo: 60 },
        { provincia: "Catamarca", costo: 75 },
        { provincia: "Chaco", costo: 85 },
        { provincia: "Chubut", costo: 95 },
        { provincia: "Cordoba", costo: 0 },
        { provincia: "Corrientes", costo: 80 },
        { provincia: "Entre Ríos", costo: 65 },
        { provincia: "Formosa", costo: 90 },
        { provincia: "Jujuy", costo: 85 },
        { provincia: "La Pampa", costo: 70 },
        { provincia: "La Rioja", costo: 90 },
        { provincia: "Mendoza", costo: 80 },
        { provincia: "Misiones", costo: 75 },
        { provincia: "Neuquen", costo: 85 },
        { provincia: "Rio Negro", costo: 85 },
        { provincia: "Salta", costo: 85 },
        { provincia: "San Juan", costo: 80 },
        { provincia: "San Luis", costo: 75 },
        { provincia: "Santa Cruz", costo: 95 },
        { provincia: "Santa Fe", costo: 70 },
        { provincia: "Santiago del Estero", costo: 80 },
        { provincia: "Tierra del Fuego", costo: 100 },
        { provincia: "Tucuman", costo: 65 }
    ];

    const handleEnvio = async () => {
        const input = document.getElementById("valorEnvio");
        const value = input.value;
        const response = await axios.get(`http://localhost:3000/api/codigo_postal?codigo=${value}`);

        const ciudad = response.data;
        const provinciaEncontrada = provinciasCostosEnvio.find(provincia => ciudad.Provincia === provincia.provincia);

        if (provinciaEncontrada) {
            setEnvio(provinciaEncontrada.costo);
        } else {
            setEnvio(null);
        }

    }

    useEffect(() => {
        setCartLocal(cart);
    }, [cart]);

    useEffect(() => {

        setIsDiv(envio !== null);
    }, [envio]);

    return (
        <div className={`container-xl d-flex  flex-column ${style.container_shopping}`}>
            <span className={style.span}>CARRITO</span>
            <div className={`d-flex justify-content-between ${width <= 500 ? "flex-column" : ""}`}>
                <div className={`d-flex justify-content-start flex-wrap ${width <= 500 ? "row" : ""}`}>
                    {cartLocal.length > 0 ? cartLocal.map((product) => {
                        total += Number(product.price.substr(0));
                        return (
                            <div className={`${width <= 500 ? "col-6" : ""}`} >
                                <Card key={product.id}
                                    id={product.id}
                                    img={product.img}
                                    category={product.category}
                                    brand={product.brand}
                                    price={product.price}
                                    oldprice={product.oldprice}
                                    ranking={product.ranking}
                                />

                            </div>
                        );
                    }) : <p className={style.p}>No hay productos en tu carrito</p>}
                </div>
                <div className={`${style.conatiner_lista} ${width <= 500 ? "mb-5" : ""}`}>
                    <h3 className="mt-3">Lista de Productos</h3>
                    <div className={style.containe_list}>
                        <p className={style.p}> Sub Total : <span>${total}</span> </p>
                        {envio === null ?
                            <div>
                                <p className={style.p}>Calcular Envío: <span>Ingrese su codigo postal</span></p>
                                <input id="valorEnvio" type="number" placeholder="5000" />
                                <button onClick={handleEnvio}>Calcular</button>
                            </div> :
                            <div>
                                <p className={style.p}>Costo de Envío: ${envio}</p>
                            </div>}
                        <p className={style.p}>Total Compra: <span>${total + envio}</span></p>
                    </div>
                    <button onClick={() => {
                        window.alert("Su compra fue realizado con éxito")
                        setCartLocal([])
                    }}>Comprar</button>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;