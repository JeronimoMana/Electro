
import { useSelector } from "react-redux";
import Slider from "react-slick";
import Card from "../card/Card";


const Carrusel = () => {

    const allProducts = useSelector((state => state.allProducts))


    const CustomPrevArrow = (prop) => {
        const { className, onClick } = prop;
        return (
            <div
                className={`custom-prev-arrow  ${className}`}
                onClick={onClick}
            />
        );
    };

    const CustomNextArrow = (prop) => {
        const { className, onClick } = prop;
        return (
            <div
                className={`custom-next-arrow ${className} `}
                onClick={onClick}
            />
        );
    };

    var settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="container-xxl my-5 ">
            <h2>NUEVOS PRODUCTOS</h2>
            <div className="mx-auto ">

                <Slider  {...settings} >
                    {allProducts.map(product => {
                        return (
                            <Card key={product.id}
                                id={product.id}
                                img={product.img}
                                category={product.category}
                                brand={product.brand}
                                price={product.price.toString()}
                                oldprice={product.old_price.toString()}
                                ranking={parseFloat(product.ranking)}
                            />
                        )
                    })}
                </Slider >
            </div>
        </div >
    );
};


export default Carrusel;

