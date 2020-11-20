import React from 'react';
import { Link } from 'react-router-dom'
import Columns from 'react-columns';
import { useDispatch, useSelector } from 'react-redux';
import './ProductView.css';
import { addToCart } from '../../../../redux/actions/cartAction'
import { getProduct } from '../../../../redux/actions/product'
const ProductView = (props) => {
    const products = props.products || [];
    const dispatch = useDispatch();
    const product = products.map(pd =>
        <div className="card rounded-0 m-2 products-card">
            <div className="image-box">
                <Link to="/productDetails">  <img className="card-img-top home-products-img" onClick={() => dispatch(getProduct(pd._id))} src={pd.image} alt={pd.name} /></Link>
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
            columns: 2,
            query: 'min-width: 300px'
        },
        {
            columns: 2,
            query: 'min-width: 350px'
        },
        {
            columns: 2,
            query: 'min-width: 464px'
        },
        {
            columns: 4,
            query: 'min-width: 1200px'
        },
        {
            columns: 5,
            query: 'min-width: 1500px'
        },
        {
            columns: 10,
            query: 'min-width: 3000px'
        }
    ];
    return (
        <div className="col-md-12">
            <Columns queries={queries}>{product}</Columns>
        </div>
    );
};

export default ProductView;