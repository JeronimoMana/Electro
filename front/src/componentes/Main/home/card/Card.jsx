
import style from './Card.module.css'
import { useState } from "react";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { add_fav, remove_fav, add_cart, remove_cart } from '../../../../redux/action';


const Card = (product) => {
    const [Hover, setHover] = useState(null);
    const favorites = useSelector((state) => state.myFavorites)
    const shopping = useSelector((state => state.shoppingCart))
    const dispatch = useDispatch()

    const isFavorite = favorites.some(prod => prod.id === product.id);
    const isCart = shopping.some(prod => prod.id === product.id)

    const handleFavorites = () => {
        if (!isFavorite) {
            dispatch(add_fav(product));
        } else {
            dispatch(remove_fav(product.id));
        }
    };

    const renderRankig = () => {
        const filledStars = Math.floor(product.ranking);
        const emptyStars = 5 - filledStars;
        const stars = []
        for (let i = 0; i < filledStars; i++) {
            stars.push(
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E01219" className={`bi bi-star-fill ${style.z_index}`} viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
            );
        }
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <svg key={i + filledStars} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#15161d" className={`bi bi-star ${style.z_index}`} viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
            );
        }

        return stars;
    }
    const handleCart = () => {

        if (!isCart) {
            dispatch(add_cart(product));
        } else {
            dispatch(remove_cart(product.id));
        }
    }
    const handleBorder = (prop) => {
        setHover(prop)
    }
    return (
        <div>

            <div
                className={`my-3 position-relative ${style.slider_container} `}
                onMouseEnter={() => handleBorder('card1')}
                onMouseLeave={() => handleBorder(null)}>
                <div className={`card me-3 text-center ${style.card} ${Hover === 'card1' ? style.border : ''}`} >
                    <img src={product.img} alt={product.brand} className={style.imgs} />
                    <p className={`mb-1 ${style.categories}`}>{product.category}</p>
                    <p className={`mb-1 ${style.brand}`}>{product.brand}</p>
                    <p className={style.price}>{product.price} <del className={style.del_price}>{product.oldprice}</del></p>
                    <div className={style.rankig}>
                        {renderRankig()}
                    </div>
                    {!isFavorite ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" className="bi bi-heart mx-auto my-3" viewBox="0 0 16 16" onClick={handleFavorites}>
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.920 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#E01219" className="bi bi-heart-fill mx-auto my-3" viewBox="0 0 16 16" onClick={handleFavorites}>
                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                        </svg>
                    )}
                    <div className={style.alerts}>
                        <div className={`px-2 py-0 ${style.discount}`}>
                            -30% off
                        </div>
                        <div className={`px-2 py-0 ${style.new}`}>
                            Nuevo
                        </div>
                    </div>
                </div>
                <div className={`d-flex justify-content-center ${style.add_card}`}>
                    {!isCart ? <button className={`my-4 ${style.btn_card}`} type="button" onClick={handleCart}>Añadir al carrito</button> :
                        <button className={`my-4 ${style.btn_card}`} type="button" onClick={handleCart}>Eliminar de el carrito</button>}
                </div>
            </div>
        </div>
    )

}
Card.propTypes = {
    img: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    brand: PropTypes.string,
    price: PropTypes.string.isRequired,
    oldprice: PropTypes.string.isRequired,
    ranking: PropTypes.number.isRequired
};

export default Card