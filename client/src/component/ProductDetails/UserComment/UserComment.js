import React from 'react';
import './UserComment.css';

const UserComment = ({review}) => {
    const data = review || []
    return (
        <div className="col-md-12">
            <p className="py-2 pl-2 comment-header">Customer review ({data.length})</p>
            <div>
               {data.map(rv =>(

                  <div>
                    <p> {rv.customerName}</p>
                    <p> {rv.rating}</p> 
                    <p> {rv.review}</p> 
                    <hr/>
                  </div>
               ))}
            </div>
        </div>
    );
};

export default UserComment;