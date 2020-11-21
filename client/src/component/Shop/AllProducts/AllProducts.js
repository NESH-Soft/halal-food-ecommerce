import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getProductsByCategory } from '../../../redux/actions/product'
import { Link } from 'react-router-dom'
import Columns from 'react-columns';
import { addToCart } from '../../../redux/actions/cartAction'
import {getProduct} from '../../../redux/actions/product'

const AllProducts = () => {
    const dispatch = useDispatch();
 
    // useEffect(() => {
    //     dispatch(getProductsByCategory());
    //     //eslint-disable-next-line
    // }, []);

    const products = useSelector((state) => state.productState.productFilterByCategory);
    const product = products.map(pd =>
        <div className="card rounded-0 mx-2 mt-2 mb-4 products-card">
            <div className="image-box">
                <Link to="/productDetails">  <img className="card-img-top" onClick={() => dispatch(getProduct(pd._id))} src={pd.image} alt={pd.name} /></Link>
            </div>
            <div className="box-button">
            <div className="px-2" style={{borderTop: '1px solid lightgray'}}>
                    <p>{pd.name}</p>
                    <h6 style={{backgroundColor:'#7FFF00', width:'30%',padding:'0px 10px'}} >¥{pd.specialPrice}</h6>
                    <span><del className="text-secondary">¥{pd.price}</del></span>
                </div>
                <button className="btn btn-Addtocart rounded-0 w-100" onClick={() => dispatch(addToCart(pd))}>Add to card</button>
            </div>
        </div>);
    var queries = [
        {
            columns: 3,
            query: 'min-width: 800px'
        },
        {
            columns: 4,
            query: 'min-width: 1200px'
        },
        {
            columns: 5,
            query: 'min-width: 1500px'
        }
    ];
    return (
        <div>
            <Columns queries={queries}>{product}</Columns>
        </div>
    );
};

export default AllProducts;