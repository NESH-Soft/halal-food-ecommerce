import React from 'react';
import './FooterForm.css';
const FooterForm = () => {
    return (

        <div>
            <form>
                <div className="col-md-11">
                    <div className="row">
                        <div className="col-md-7 col-sm-12 col-12">
                            <input type="search" placeholder="Enter Your Email" className="form-control rounded-0" />
                        </div>
                        <div className="col-md-5 col-sm-12 col-12">
                            <input type="submit" value="SUBSCRIBE" className="btn btn-footer pb-1 rounded-0 " />
                        </div>
                    </div>
                </div>
            </form>
        </div>

    );
};

export default FooterForm;
