import React from 'react';
import './HeaderCarousel.css';
import vagetables from '../../../images/headerSlider/vagetables.png'

const HeaderCarousel = () => {
    return (
        <div className="headerBanner">
            <div className="p-5">
                <div className="row d-flex align-items-center">
                    <div className="col-md-5 banner-text">
                        <h4>FRUIT FRESH</h4>
                        <h1>Vegetable 100% Organic</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nobis ipsa alias eum repudiandae nemo officia labore, amet laborum repellat nam!</p>
                        <p>
                            Free Pickup and Delivery Available
                        </p>
                        <button className="btn btn-Shopnow px-5 rounded-0" >
                            Shop now
                        </button>
                    </div>
                    <div className="col-md-7">
                        <img src={vagetables} width="100%" height="90%" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderCarousel;