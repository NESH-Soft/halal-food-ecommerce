import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slider from "react-slick";
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShopCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 575,
            settings: {
              arrows: false,
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              slidesToShow: 1,
            },
          },
        ],
      };
    const arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const allArray = arrays.map(arr => {
        return (
            <img class="card-img-top" src="https://img.freepik.com/free-photo/transparent-turquoise-drop-pure-water-feather-blurred-blue-background-macro-copyspace_97669-421.jpg?size=626&ext=jpg" alt="" />
        )
    })
    return (
        <Slider {...settings}>
            <div>
               {
                   allArray
               }
            </div>
        </Slider>
    );
};

export default ShopCarousel;