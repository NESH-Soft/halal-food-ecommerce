import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Category.css';
const Category = () => {
    return (
        <div className="col-md-12">
            <div className="hero-categories">
                <div className="hero-categories-all py-3" style={{ backgroundColor: '#76a333', color: '#fff' }}>
                    <div className="pl-4">
                        <FontAwesomeIcon icon={faBars} /><span className="ml-5">All Categories</span>
                    </div>
                </div>
                <ul>
                    <li><a href="#">Fresh Meat</a></li>
                    <li><a href="#">Vegetables</a></li>
                    <li><a href="#">Fruit & Nut Gifts</a></li>
                    <li><a href="#">Fresh Berries</a></li>
                    <li><a href="#">Ocean Foods</a></li>
                    <li><a href="#">Butter & Eggs</a></li>
                    <li><a href="#">Fastfood</a></li>
                    <li><a href="#">Fresh Onion</a></li>
                    <li><a href="#">Papayaya & Crisps</a></li>
                    <li><a href="#">Oatmeal</a></li>
                    <li><a href="#">Fresh Bananas</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Category;