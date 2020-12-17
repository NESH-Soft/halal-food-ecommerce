import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedMenu.css';

const FeaturedMenu = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <button className="navbar-toggler m-auto" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="col-md-4 m-auto featuredMenu">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to="" className="nav-link featured-link ml-4">All</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="" className="nav-link featured-link ml-4">Oranges</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="" className="nav-link featured-link ml-4">Fresh Meat</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="" className="nav-link featured-link ml-4"> Vegetables</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="" className="nav-link featured-link ml-4"> Fastfood</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default FeaturedMenu;