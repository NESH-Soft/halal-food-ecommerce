import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategory } from '../../redux/actions/categoryAction';
import {getProductsByCategory} from '../../redux/actions/product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSortAmountDown ,faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import './Category.css';
import { Link } from 'react-router-dom';
const Category = () => {
    const [categoryColor,setCategoryColor] = useState('');
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getCategory())
        // eslint-disable-next-line
    },[])
  
    const category = useSelector((state) => state.categoryState.category);
  
    const [categoryClass, setCategoryClass] = useState('categoryShow');
    //category dropdown system
    const hangleCategory = () => {
        if (categoryClass === 'categoryShow') {
            setCategoryClass('categoryHide');
        }
        if (categoryClass === 'categoryHide') {
            setCategoryClass('categoryShow');
        }
    }

    return (
        <div className="hero-categories">
            <div className="hero-categories-title">
                <div className="d-flex justify-content-between py-2" onClick={hangleCategory}>
                    <div>
                        <FontAwesomeIcon icon={faBars} />
                        <span className="ml-3">All Categories</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faSortAmountDown} />
                    </div>
                </div>
            </div>
            <ul className={`${categoryClass}`}>
                {
                   category && category.map((c)=>(
                    <li className="px-2" onClick={()=>dispatch(getProductsByCategory(c))}><Link to="/shop"> <span className="pr-2"><FontAwesomeIcon icon={faCheckCircle}/></span> <spam>{ c.category}</spam></Link></li>   
                ))
                }
            </ul>
        </div>
    );
};

export default Category;