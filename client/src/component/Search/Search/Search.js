import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import {useHistory } from 'react-router-dom';
import {getSearchProduct} from '../../../redux/actions/product'
import './Search.css'
const Search = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        dispatch(getSearchProduct(data))
        history.push('/searchProducts')
    }

    return (
        <div>
            <form className="row domain-search bg-pblue" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-12">
                    <div className="input-group"> <input type="search" 
                    name="searchInput"
                    ref={register({ required: true })}
                    placeholder="Search porducts ..." className="form-control" /> <span className="input-group-addon"><input type="submit" value="Search" className="btn btn-Search" /></span>
                     {errors.register && <span>This field is required</span>}
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Search;