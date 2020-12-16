import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSearchProduct } from '../../../redux/actions/product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
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
            <div className="row">
                <div className="col-md-9">
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
                <div className="col-md-3">
                    <div className="row text-position">
                        <div className="d-flex align-items-center" style={{ backgroundColor: '#f5f5f5', borderRadius: '50%', padding: '0px 15px', height: '48px' }}>
                            <FontAwesomeIcon icon={faPhoneAlt} style={{ color: '#76a333', fontSize: '20px' }} />
                        </div>
                        <div className="pl-3">
                            <p>+65 11.188.888</p>
                            <p style={{ marginTop: '-20px' }}>support 24/7 time</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;