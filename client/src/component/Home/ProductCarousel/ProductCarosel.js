import React from 'react';
import './ProductCarousel.css'
const ProductCarosel = () => {
    return (
        <div className="col-md-12 m-auto">
            <div class="top-content mt-4">
                <div class="container-fluid">
                    <div id="carousel-example" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner row w-100 mx-auto" role="listbox">
                            <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
                                <div className="product-card text-center">
                                    <img src="https://freepngimg.com/thumb/orange/19-orange-png-image-download-thumb.png" class="img-fluid mx-auto d-block" alt="img1" />
                                    <button className="btn btn-light px-5 rounded-0">Add to Cart</button>
                                </div>
                            </div>
                            <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                                <div className="product-card text-center">
                                    <img src="https://freepngimg.com/thumb/fruit/4-2-fruit-png-image-thumb.png" class="img-fluid mx-auto d-block" alt="img2" />
                                    <button className="btn btn-light px-5 rounded-0">Add to Cart</button>
                                </div>
                            </div>
                            <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                                <div className="product-card text-center">
                                    <img src="https://freepngimg.com/thumb/mango/7-2-mango-free-png-image-thumb.png" class="img-fluid mx-auto d-block" alt="img3" />
                                    <button className="btn btn-light px-5 rounded-0">Add to Cart</button>
                                </div>

                            </div>
                            <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                                <div className="product-card text-center">
                                    <img src="https://freepngimg.com/thumb/strawberry/1-strawberry-png-images-thumb.png" class="img-fluid mx-auto d-block" alt="img4" />
                                    <button className="btn btn-light px-5 rounded-0">Add to Cart</button>
                                </div>

                            </div>
                            <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                                <div className="product-card text-center">
                                    <img src="https://freepngimg.com/thumb/banana/8-banana-png-image-thumb.png" class="img-fluid mx-auto d-block" alt="img5" />
                                    <button className="btn btn-light px-5 rounded-0">Add to Cart</button>
                                </div>

                            </div>
                            <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                                <div className="product-card text-center">
                                    <img src="https://freepngimg.com/thumb/apple/16-red-apple-png-image-thumb.png" class="img-fluid mx-auto d-block" alt="img6" />
                                    <button className="btn btn-light px-5 rounded-0">Add to Cart</button>
                                </div>

                            </div>
                            <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                                <div className="product-card text-center">
                                    <img src="https://freepngimg.com/thumb/lemon/4-lemon-png-image-thumb.png" class="img-fluid mx-auto d-block" alt="img7" />
                                    <button className="btn btn-light px-5 rounded-0">Add to Cart</button>
                                </div>

                            </div>
                            <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                                <div className="product-card text-center">
                                    <img src="https://freepngimg.com/thumb/fruit/5-2-fruit-free-png-image-thumb.png" class="img-fluid mx-auto d-block" alt="img8" />
                                    <button className="btn btn-light px-5 rounded-0">Add to Cart</button>
                                </div>

                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carousel-example" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carousel-example" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCarosel;