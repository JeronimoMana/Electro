
import Card from "../home/card/Card";
import Navigation from "../navigation/Navigation";
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useState } from "react";
import PropTypes from 'prop-types';
import { NavLink, useLocation } from "react-router-dom";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import styles from './Shop.module.css'

const Shop = ({ prop }) => {

    const [porductFilter, setProductFilter] = useState([])
    const allProducts = useSelector((product) => product.allProducts)
    const { pathname } = useLocation()

    const countCategory = (category) => {
        const productCount = allProducts.filter((prduct) => prduct.category === category)
        return productCount.length
    }


    const filtar = (path) => {
        switch (path) {
            case "/shop_notebook":
                setProductFilter(allProducts.filter((product) => product.category === "Notebook"))
                break;
            case "/shop_smartphone":
                setProductFilter(allProducts.filter((product) => product.category === "Smartphone"))
                break;
            case "/shop_accesories":
                setProductFilter(allProducts.filter((product) => product.category === "Accesories"))
                break;
            case "/shop_camera":
                setProductFilter(allProducts.filter((product) => product.category === "Camera"))
                break;
            case "/shop_all":
                setProductFilter(allProducts)
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        filtar(pathname)
        return (() => {
            setProductFilter([])
        })
    }, [pathname])


    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);


    const handleSliderChange = (values) => {
        const [newMinPrice, newMaxPrice] = values;
        setMinPrice(parseInt(newMinPrice));
        setMaxPrice(parseInt(newMaxPrice));
    };





    const handleMinPriceChange = (event) => {
        const newValue = event.target.value;
        if (!isNaN(newValue) || newValue === '') {
            setMinPrice(newValue === '' ? '' : parseInt(newValue));
        }
    };

    const handleMaxPriceChange = (event) => {
        const newValue = event.target.value;
        if (!isNaN(newValue) || newValue === '') {
            setMaxPrice(newValue === '' ? '' : parseInt(newValue));
        }
    };


    return (
        <div >
            <Navigation />
            <div className={`container-fluid  ${styles.border_navigate} `}>
                <nav aria-label="breadcrumb ">
                    <ol className={`container-xl breadcrumb my-3 px-2 ${styles.navigate_shop}`}>
                        <li className={`breadcrumb-item`}><a href="#">INICIO</a></li>
                        <li className={`breadcrumb-item `} aria-current="page">{prop}</li>
                    </ol>
                </nav>
            </div>
            <div className="container-xl">

                <div className="row">
                    <div className="col-md-3 ps-1 mt-3">
                        <h4>CATEGORIAS</h4>
                        <NavLink to="/shop_notebook"><p>NOTEBOOK({countCategory("Notebook")})</p></NavLink>
                        <NavLink to="/shop_camera"><p>CAMERA({countCategory("Camera")})</p></NavLink>
                        <NavLink to="/shop_smartphone"><p>SMARTPHONE({countCategory("Smartphone")})</p></NavLink>
                        <NavLink to="/shop_accesories"><p>ACCESORIOS({countCategory("Accesories")})</p></NavLink>
                        <NavLink to="/shop_all"><p>ALL({allProducts.length})</p></NavLink>
                        <div className={styles.price_filter}>
                            <h4>PRECIO</h4>
                            <Nouislider
                                connect
                                start={[minPrice, maxPrice]}
                                range={{ min: 0, max: 1000 }}
                                onUpdate={handleSliderChange}
                            />
                            <div className={`position-relative mt-4 ${styles.input_container}`}>
                                <input
                                    id="price-min"
                                    type="numeric"
                                    className={styles.min_price}
                                    value={minPrice}
                                    onChange={handleMinPriceChange}

                                />
                                <span className={styles.btn_up}>+</span>
                                <span className={styles.btn_down}>-</span>
                            </div>
                            <span className="mx-2">-</span>
                            <div className={`position-relative ${styles.input_bt_container}`}>
                                <input
                                    id="price-max"
                                    type="numeric"
                                    className={styles.min_price}
                                    value={maxPrice}
                                    onChange={handleMaxPriceChange}
                                />
                                <span className={styles.btn_up}>+</span>
                                <span className={styles.btn_down}>-</span>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            {porductFilter.map((product) => {
                                return (
                                    <div className="col-md-4" key={product.id}>
                                        <Card
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
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};
Shop.propTypes = {
    prop: PropTypes.string.isRequired
};
export default Shop;