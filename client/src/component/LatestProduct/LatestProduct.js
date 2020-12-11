import React from 'react';
import './LetestProduct.css'

const LetestProduct = () => {
    return (
        <div className="card p-2 mt-5">
            <div style={{ backgroundColor: '#76a333',borderRadius: '5px' }} className="p-2 mb-3 text-light">
                <h5>Latest Products</h5>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <img src="https://res.cloudinary.com/halal-food/image/upload/v1606999541/fxtjvmqh7ojzifwx6miq.jpg" width="100%" height="120px" alt="" />
                </div>
                <div className="col-md-7 pl-3">
                    <p>Dry lolitta fish (100g)</p>
                    <p>¥515</p>
                    <button className="btn btn-sm btn-Addtocart btn-color btn-padding">Add Item</button>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-5">
                    <img src="https://res.cloudinary.com/halal-food/image/upload/v1607163458/igqjtkdrfroy2rsbpksl.jpg" width="100%" height="120px" alt="" />
                </div>
                <div className="col-md-7 pl-3">
                    <p>Dry cake (Pran 350g)</p>
                    <p>¥398</p>
                    <button className="btn btn-sm btn-Addtocart btn-color btn-padding">Add Item</button>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-5">
                    <img src="https://res.cloudinary.com/halal-food/image/upload/v1607662265/yfnbvpexj1brofmdxhse.jpg" width="100%" height="120px" alt="" />
                </div>
                <div className="col-md-7 pl-3">
                    <p>Dry lolitta fish (100g)</p>
                    <p>¥1570</p>
                    <button className="btn btn-sm btn-Addtocart btn-color btn-padding">Add Item</button>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-5">
                    <img src="https://res.cloudinary.com/halal-food/image/upload/v1607661674/gmicgwsbjjp6ehzp1edn.jpg" width="100%" height="120px" alt="" />
                </div>
                <div className="col-md-7 pl-3">
                    <p>Fruits Incense sticks</p>
                    <p>¥108</p>
                    <button className="btn btn-sm btn-Addtocart btn-color btn-padding">Add Item</button>
                </div>
            </div>
            <hr />

        </div>
    );
};

export default LetestProduct;