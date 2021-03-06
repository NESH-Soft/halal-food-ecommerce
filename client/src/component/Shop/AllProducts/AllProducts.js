import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Columns from 'react-columns';
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { addToCart, removeCart } from '../../../redux/actions/cartAction';
import { getProduct } from '../../../redux/actions/product';
import { addToWishList, removeWishList } from '../../../redux/actions/wishlistAction';
import emptyImg from '../../images/empty/empty.png';
import './style.css'

const AllProducts = () => {
    const dispatch = useDispatch();
    const PER_PAGE = 12;
    const isAuthenticated = useSelector((state) => state.authState.isAuthenticated);
    const products = useSelector((state) => state.productState.productFilterByCategory);
    const cartItem = useSelector((state) => state.cartState.cart);
    const wishList = useSelector((state) => state.wishListState.wishList);
    const data = products || []

    const [currentPage, setCurrentPage] = useState(0);
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    const offset = currentPage * PER_PAGE;



    const pageCount = Math.ceil(data.length / PER_PAGE);

    // include all productId from cart state
    const cartItemArray = cartItem.map(function (product) {
        return product._id
    });

    // include all productId from wishlist state
    const wishListItemArray = wishList.map(function (item) {
        return item._id
    });

    const product = data.slice(offset, offset + PER_PAGE).map(pd =>
        <div className="card m-2 p-2 products-card" key={pd._id}>
            <div className="image-box">
                <Link to="/productDetails">  <img className="card-img-top" onClick={() => dispatch(getProduct(pd._id))} src={pd.image} alt={pd.name} /></Link>
            </div>
            <div className="box-button">
                <div className="px-2" style={{ borderTop: '1px solid lightgray' }}>
                    <h6>{pd.name}</h6>
                    <div className="d-flex justify-content-between">
                        <h6 style={{ backgroundColor: '#7FFF00', width: '40%', padding: '0px 10px', borderRadius: "10px" }} >¥{pd.specialPrice}</h6>
                        {
                            isAuthenticated ? (
                                wishListItemArray.includes(pd._id) ? (
                                    <span style={{ cursor: "pointer" }} onClick={() => dispatch(removeWishList(pd._id))}><FontAwesomeIcon className="text-danger" icon={faHeart} /></span>
                                ) : (
                                        <span style={{ cursor: "pointer" }} onClick={() => dispatch(addToWishList(pd._id))}><FontAwesomeIcon className="text-secondary" icon={faHeart} /></span>
                                    )


                            ) : (
                                    <Link to="/login"  ><FontAwesomeIcon className="text-secondary" icon={faHeart} /></Link>
                                )
                        }
                    </div>
                    <span><del className="text-secondary">¥{pd.price}</del></span>
                </div>
                <div className="text-center">
                    {

                        cartItemArray.includes(pd._id) ? (
                            <button

                                disabled={
                                    pd.stock <= 0
                                }

                                className="btn btn-sm btn-Addtocart btn-danger btn-padding"
                                onClick={() => dispatch(removeCart(pd._id))}
                            >
                                <FontAwesomeIcon icon={faMinus} /> Remove item
                            </button>
                        ) : (
                                <button

                                    disabled={
                                        pd.stock <= 0
                                    }

                                    className="btn btn-sm btn-Addtocart btn-color btn-padding"

                                    onClick={() => dispatch(addToCart(pd))}
                                >
                                    <FontAwesomeIcon icon={faCartPlus} /> Add item
                                </button>
                            )
                    }
                </div>
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
        <div>

            {
                data.length ? <Columns queries={queries}>{product}</Columns> : <div className="col-md-5 m-auto text-center">
                    <img src={emptyImg} alt="empty" width="100%" />
                    <p>Opps! Products not available</p>
                </div>
            }
            <div className="col-md-6 ml-5 pt-5 pl-5">
                <ReactPaginate
                    previousLabel={"← Previous"}
                    nextLabel={"Next →"}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"}
                />
            </div>

        </div>
    );
};

export default AllProducts;