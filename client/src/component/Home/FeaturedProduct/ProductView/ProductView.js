import React, { useState } from 'react';
import Columns from 'react-columns';
import fakedata from './fakedata';

const ProductView = () => {
    const [products, setProduct] = useState(fakedata);
    const product = products.map(pd => <div className="p-4">
        <div class="card">
            <img class="card-img-top" src={pd.img} alt="Card image cap" />
        </div>
        <div className="text-center">
            <p>{pd.name}</p>
            <h6>${pd.price}</h6>
            <button className="btn btn-light">Add to card</button>
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
        columns: 4,
        query: 'min-width: 1400px'
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