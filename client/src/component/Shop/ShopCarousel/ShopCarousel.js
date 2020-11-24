import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from 'react-redux';
import {getSpecialProducts,changeSpecialProductsAddToCartOption} from '../../../redux/actions/product';
import {addToCart} from '../../../redux/actions/cartAction'
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
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSpecialProducts());
        //eslint-disable-next-line
      },[]);
  
    const dispatcher =(data)=>{
        dispatch(addToCart(data))
        dispatch(changeSpecialProductsAddToCartOption(data._id))
      }

  
    const data = useSelector((state) => state.productState.specialProducts);
const specialProducts = data || []
    
    return (
        <Carousel responsive={responsive}>

            {
                specialProducts.map((product,index)=>(
                    <div class="card mx-2">
                    <img class="card-img-top" style={{ height: '120px' }} src={product.image} alt="" />
                    <div class="card-body">
                        <p class="card-title">{product.name}</p>
                        <div className="d-flex justify-content-between">
                            <p className="text-muted"><del>$<span>{product.price}</span> </del> </p>
                            <h6>$<span>{product.specialPrice}</span> </h6>
    
                        </div>
                        {
                    product.inCart ? (
                        <button className="btn btn-Addtocart rounded-0 w-100" >In Card</button>
                    ) : (
                            <button className="btn btn-Addtocart rounded-0 w-100" onClick={() =>dispatcher(product)}>Add to card</button>
                        )
                }
                    </div>
                </div>
                ))
            }
       
           
        </Carousel>
    );
};

export default ShopCarousel;