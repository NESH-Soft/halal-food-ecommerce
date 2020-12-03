import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCartPlus, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import './WishList.css'
import { useDispatch, useSelector } from 'react-redux';
import { removeWishList } from '.././../redux/actions/wishlistAction';
import { addToCart, removeCart } from '../../redux/actions/cartAction'

const WishList = () => {

    const dispatch = useDispatch();
    const wishList = useSelector((state) => state.wishListState.wishList);
    const cartItem = useSelector((state) => state.cartState.cart);

    // include all productId from cart state
    const cartItemArray = cartItem.map(function (product) {
        return product._id
    });

    return (
        <div className="Wish-list">
            <div className="row mb-5">
                <div className="col-md-3"></div>
                <div className="col-md-8 mb-5">
                    <div style={{ borderBottom: '3px solid #76a333' }} className="my-4">
                        <h4>
                            WishList ( {
                                wishList.length > 1 ? (`${wishList.length} Items`) : (`${wishList.length} Item`)
                            } )

                        </h4>
                    </div>
                    {
                        !wishList.length ? <p> Loading...</p> : <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col" style={{ width: '20%' }}>Images</th>
                                    <th scope="col" style={{ width: '20%' }}>Product Name</th>
                                    <th scope="col" style={{ width: '20%' }}>Unit Price</th>
                                    <th scope="col" style={{ width: '20%' }}>Stock</th>
                                    <th scope="col" style={{ width: '30%' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    wishList && wishList.map((pd, index) => (
                                        <tr>
                                            <th scope="row" className="">
                                                <img className="" style={{ height: '50px', width: '50px' }} src={pd.image} alt="" />
                                            </th>
                                            <td className="py-3">{pd.name}</td>
                                            <td className="py-3">{pd.specialPrice}</td>
                                            <td className="py-3">{pd.stock}</td>
                                            <td className="py-3">
                                                <div className="row">
                                                    <div className="col-md-6">

                                                        {cartItemArray.includes(pd._id) ? (
                                                            <button

                                                                disabled={
                                                                    pd.stock <= 0
                                                                }

                                                                className="btn btn-warning rounded-0"
                                                                onClick={() => dispatch(removeCart(pd._id))}
                                                            >
                                                                <FontAwesomeIcon icon={faMinusCircle} />
                                                            </button>
                                                        ) : (
                                                                <button

                                                                    disabled={
                                                                        pd.stock <= 0
                                                                    }

                                                                    className="btn btn-Addtocart rounded-0"

                                                                    onClick={() => dispatch(addToCart(pd))}
                                                                >
                                                                    <FontAwesomeIcon className="text-dark" icon={faCartPlus} />
                                                                </button>
                                                            )
                                                        }
                                                    </div>
                                                    <div className="col-md-6">
                                                        <span style={{ cursor: "pointer" }} onClick={() => dispatch(removeWishList(pd._id))}><FontAwesomeIcon className="text-danger" icon={faTrash} /></span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </div>
    );
};

export default WishList;