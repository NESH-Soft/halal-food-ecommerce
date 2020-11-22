import React from 'react';
import './Search.css'
const Search = () => {
    return (
        <div>
            <form className="row domain-search bg-pblue">
                <div className="col-md-12">
                    <div className="input-group"> <input type="search" placeholder="Search porducts ..." className="form-control" /> <span className="input-group-addon"><input type="submit" value="Search" className="btn btn-Search" /></span>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Search;