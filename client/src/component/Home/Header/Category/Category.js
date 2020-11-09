import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Category.css';
import { Link } from 'react-router-dom';
const Category = () => {
    return (
        <div className="col-md-12">
            <div className="hero-categories">
                <div className="hero-categories-all py-3" style={{ backgroundColor: '#76a333', color: '#fff' }}>
                    <div className="pl-4">
                        <FontAwesomeIcon icon={faBars} /><span className="ml-1">All Categories</span>
                    </div>
                </div>
                <ul>
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
        </div>
    );
};

export default Category;