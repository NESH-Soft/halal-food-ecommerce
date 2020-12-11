import React from 'react';
import { Link } from 'react-router-dom'
import vagetables from '../../../images/headerSlider/vagetables.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HeaderCarousel.css';

const HeaderCarousel = () => {
    let settings = {
        dots: true,
        autoplay : true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="container-fluid headerBanner">
            <Slider {...settings}>
                <div className="px-4">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-5 banner-text">
                            <h4>FRUIT FRESH</h4>
                            <h1>Vegetable 100% Organic</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nobis ipsa alias eum repudiandae nemo officia labore, amet laborum repellat nam!</p>
                            <p>
                                Free Pickup and Delivery Available
                        </p>
                            <Link to="/shop">
                                <button className="btn btn-Shopnow px-5 rounded-0" >
                                    Shop now
                        </button>
                            </Link>

                        </div>
                        <div className="col-md-7">
                            <img src={vagetables} width="100%" height="90%" alt="" />
                        </div>
                    </div>
                </div>
                <div className="px-4">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-5 banner-text">
                            <h4>FRUIT FRESH</h4>
                            <h1>Vegetable 100% Organic</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nobis ipsa alias eum repudiandae nemo officia labore, amet laborum repellat nam!</p>
                            <p>
                                Free Pickup and Delivery Available
                        </p>
                            <Link to="/shop">
                                <button className="btn btn-Shopnow px-5 rounded-0" >
                                    Shop now
                        </button>
                            </Link>

                        </div>
                        <div className="col-md-7">
                            <img src="https://www.pngitem.com/pimgs/m/85-853056_fruit-fruits-transparent-background-hd-png-download.png" width="100%" height="100%" alt="" />
                        </div>
                    </div>
                </div>
                <div className="px-4">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-5 banner-text">
                            <h4>FRUIT FRESH</h4>
                            <h1>Vegetable 100% Organic</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nobis ipsa alias eum repudiandae nemo officia labore, amet laborum repellat nam!</p>
                            <p>
                                Free Pickup and Delivery Available
                        </p>
                            <Link to="/shop">
                                <button className="btn btn-Shopnow px-5 rounded-0" >
                                    Shop now
                        </button>
                            </Link>
                        </div>
                        <div className="col-md-7">
                            <img src="https://www.pngitem.com/pimgs/m/111-1112851_don-t-throw-fruit-fruit-png-transparent-png.png" width="100%" height="100%" alt="" />
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    );
};

export default HeaderCarousel;