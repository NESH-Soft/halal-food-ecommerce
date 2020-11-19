import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 10
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const ShopCarousel = () => {
    return (
        <Carousel responsive={responsive}>
            <div class="card mx-2">
                <img class="card-img-top" style={{ height: '120px' }} src="https://img.freepik.com/free-photo/transparent-turquoise-drop-pure-water-feather-blurred-blue-background-macro-copyspace_97669-421.jpg?size=626&ext=jpg" alt="" />
                <div class="card-body">
                    <h5 class="card-title">this is name</h5>
                    <div className="d-flex justify-content-between">
                        <p className="text-muted"><del>$<span>350</span> </del> </p>
                        <h4>$<span>300</span> </h4>

                    </div>
                    <a href="#" class="btn btn-primary w-100">Add to cart</a>
                </div>
            </div>
            <div class="card mx-2">
                <img class="card-img-top" style={{ height: '120px' }} src="https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png" alt="" />
                <div class="card-body">
                    <h5 class="card-title">this is name</h5>
                    <div className="d-flex justify-content-between">
                        <p className="text-muted"><del>$<span>350</span> </del> </p>
                        <h4>$<span>300</span> </h4>

                    </div>
                    <a href="#" class="btn btn-primary w-100">Add to cart</a>
                </div>
            </div>
            <div class="card mx-2">
                <img class="card-img-top" style={{ height: '120px' }} src="https://image.freepik.com/free-photo/many-oranges-from-valencia-spain_137916-1.jpg" alt="" />
                <div class="card-body">
                    <h5 class="card-title">this is name</h5>
                    <div className="d-flex justify-content-between">
                        <p className="text-muted"><del>$<span>350</span> </del> </p>
                        <h4>$<span>300</span> </h4>

                    </div>
                    <a href="#" class="btn btn-primary w-100">Add to cart</a>
                </div>
            </div>
            <div class="card mx-2">
                <img class="card-img-top" style={{ height: '120px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwklrVMO7ZdPKB0dGZ0BgDJhXeEXIMPgwf8g&usqp=CAU" alt="" />
                <div class="card-body">
                    <h5 class="card-title">this is name</h5>
                    <div className="d-flex justify-content-between">
                        <p className="text-muted"><del>$<span>350</span> </del> </p>
                        <h4>$<span>300</span> </h4>

                    </div>
                    <a href="#" class="btn btn-primary w-100">Add to cart</a>
                </div>
            </div>
            <div class="card mx-2">
                <img class="card-img-top" style={{ height: '120px' }} src="https://cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/3LFPZJSOFEYWLSLPBCH72CI2GY.jpg" alt="" />
                <div class="card-body">
                    <h5 class="card-title">this is name</h5>
                    <div className="d-flex justify-content-between">
                        <p className="text-muted"><del>$<span>350</span> </del> </p>
                        <h4>$<span>300</span> </h4>
                    </div>
                    <a href="#" class="btn btn-primary w-100">Add to cart</a>
                </div>
            </div>
            <div class="card mx-2">
                <img class="card-img-top" style={{ height: '120px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs4Mzi4VthlNuUgP5QbgfJyoGIPTz3Z_BylA&usqp=CAU" alt="" />
                <div class="card-body">
                    <h5 class="card-title">this is name</h5>

                    <div className="d-flex justify-content-between">
                        <p className="text-muted"><del>$<span>350</span> </del> </p>
                        <h4>$<span>300</span> </h4>

                    </div>
                    <a href="#" class="btn btn-primary w-100">Add to cart</a>
                </div>
            </div>

        </Carousel>
    );
};

export default ShopCarousel;