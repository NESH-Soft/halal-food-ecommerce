import React from 'react';
import {Link} from 'react-router-dom'
import Columns from 'react-columns';
import { useDispatch, useSelector } from 'react-redux';
import './ProductView.css';
import { addToCart } from '../../../../redux/actions/cartAction'
import {getProduct} from '../../../../redux/actions/product'
const ProductView = (props) => {
    const dispatch = useDispatch();
    const product = props.products.map(pd =>
     <div className="p-3">
        <div className="card image-box">
          <Link to="/productDetails">  <img className="card-img-top" onClick={()=>dispatch(getProduct(pd._id)) } src={pd.image} alt={pd.name} /></Link>
        </div>
        <div className="text-center box-button">
            <p>{pd.name}</p>
            <h6>${pd.price}</h6>
            <button className="btn btn-Addtocart w-100" onClick={()=>dispatch(addToCart(pd))}>Add to card</button>
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

export default ProductView;