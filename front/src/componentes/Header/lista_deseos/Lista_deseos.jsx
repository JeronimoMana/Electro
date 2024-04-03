import style from "./Lista_deseos.module.css"
import { useSelector } from "react-redux";
import Card from "../../Main/home/card/Card";

const Lista_deseos = () => {
    const favorites = useSelector(state => state.myFavorites)
    return (
        <div className={`container-xl d-flex  flex-column ${style.container_deseos}`}>
            <span className={style.span}>MIS DESEOS</span>
            <div className="d-flex justify-content-start flex-wrap">
                {favorites.length > 0 ? favorites.map((product) => {
                    return (
                        <Card key={product.id}
                            id={product.id}
                            img={product.img}
                            category={product.category}
                            brand={product.brand}
                            price={product.price}
                            oldprice={product.oldprice}
                            ranking={product.ranking}
                        />)
                }) : <p className={style.p} >No hay deseos en tu lista</p>}
            </div>
        </div>
    )
}


export default Lista_deseos;