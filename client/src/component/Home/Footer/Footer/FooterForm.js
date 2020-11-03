import React from 'react';

const FooterForm = () => {
    return (
      
            <div>
            <form className="row domain-search bg-pblue">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="input-group"> <input type="search" placeholder="Enter Your Email" className="form-control" /> <span className="input-group-addon"><input type="submit" value="SUBSCRIBE" className="btn btn-Search" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
     
    );
};

export default FooterForm;
