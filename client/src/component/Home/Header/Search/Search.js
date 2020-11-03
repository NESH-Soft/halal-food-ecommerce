import React from 'react';
import './Search.css'
const Search = () => {
    return (
        <div>
            <form class="row domain-search bg-pblue">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="input-group"> <input type="search" placeholder="Search porducts ..." class="form-control" /> <span class="input-group-addon"><input type="submit" value="Search" class="btn btn-Search" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Search;