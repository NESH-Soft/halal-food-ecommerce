import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './WishList.css'
import { useDispatch, useSelector } from 'react-redux';
import { getWishList, removeWishList } from '.././../redux/actions/wishlistAction';
import Footer from '../Footer/Footer/Footer';

const WishList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWishList());
        //eslint-disable-next-line
    }, []);

    const wishList = useSelector((state) => state.wishListState.wishList);

    return (
        <div className="col-md-12 Wish-list">
            <Navbar />
            <div className="row">
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
                                    <th scope="col" style={{ width: '20%' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    wishList && wishList.map((item, index) => (
                                        <tr>
                                            <th scope="row" className="">
                                                <img className="" style={{ height: '50px', width: '50px' }} src={item.image} alt="" />
                                            </th>
                                            <td className="py-3">{item.name}</td>
                                            <td className="py-3">{item.specialPrice}</td>
                                            <td className="py-3">{item.stock}</td>
                                            <td className="py-3">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <span><FontAwesomeIcon className="text-dark" icon={faCartPlus} /></span>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <span style={{ cursor: "pointer" }} onClick={() => dispatch(removeWishList(item._id))}><FontAwesomeIcon className="text-danger" icon={faTrash} /></span>
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
            <Footer />
        </div>
    );
};

export default WishList;