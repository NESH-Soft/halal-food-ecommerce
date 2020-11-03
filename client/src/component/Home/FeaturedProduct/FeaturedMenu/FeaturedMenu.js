import React from 'react';
import './FeaturedMenu.css';

const FeaturedMenu = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <button class="navbar-toggler m-auto" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="col-md-4 m-auto featuredMenu">
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link featured-link ml-4" href="#">All</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link featured-link ml-4" href="#">Oranges</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link featured-link ml-4" href="#">Fresh Meat</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link featured-link ml-4" href="#"> Vegetables</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link featured-link ml-4" href="#"> Fastfood</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default FeaturedMenu;