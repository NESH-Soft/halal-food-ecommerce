import React from 'react';


const Details = ({details}) => {
    return (
        <>
            <div className="col-md-11 my-5">
                <div className="mb-3">
                   <h3> Product Details</h3>
                </div>

                <p>
                   {details}
                    </p>
            </div>
        </>
    );
};

export default Details;