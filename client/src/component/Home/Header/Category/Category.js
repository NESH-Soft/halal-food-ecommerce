import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSortAmountDown } from '@fortawesome/free-solid-svg-icons'
import './Category.css';
import { Link } from 'react-router-dom';
const Category = () => {
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
                <div className="px-4 d-flex justify-content-between py-2" onClick={hangleCategory}>
                    <div>
                        <FontAwesomeIcon icon={faBars} />
                        <span className="ml-3">All Categories</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faSortAmountDown} />
                    </div>
                </div>
            </div>
            <ul className={categoryClass}>
                <li><Link to="">Fresh Meat</Link></li>
                <li><Link to="">Vegetables</Link></li>
                <li><Link to="">Fruit & Nut Gifts</Link></li>
                <li><Link to="">Fresh Berries</Link></li>
                <li><Link to="">Ocean Foods</Link></li>
                <li><Link to="">Butter & Eggs</Link></li>
                <li><Link to="">Fastfood</Link></li>
                <li><Link to="">Fresh Onion</Link></li>
                <li><Link to="">Papayaya & Crisps</Link></li>
                <li><Link to="">Oatmeal</Link></li>
                <li><Link to="">Fresh Bananas</Link></li>
            </ul>
        </div>
    );
};

export default Category;