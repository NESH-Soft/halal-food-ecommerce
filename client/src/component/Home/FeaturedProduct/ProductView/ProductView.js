import React from 'react';
import Columns from 'react-columns';
import { useDispatch, useSelector } from 'react-redux';
import './ProductView.css';
import { addToCart } from '../../../../redux/actions/cartAction'

const ProductView = (props) => {
    const dispatch = useDispatch();
    const product = props.products.map(pd => <div className="p-4">
        <div className="card">
            <img className="card-img-top" src={pd.image} alt={pd.name} />
        </div>
        <div className="text-center">
            <p>{pd.name}</p>
            <h6>${pd.price}</h6>
            <button className="btn btn-light btn-Addtocart w-100" onClick={()=>dispatch(addToCart(pd))}>Add to card</button>
        </div>
    </div>);
    var queries = [
    {
        columns: 3,
        query: 'min-width: 500px'
    },
    {
        columns: 4,
        query: 'min-width: 1000px'
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