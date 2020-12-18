import React from 'react';
import './UserComment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faStar } from '@fortawesome/free-solid-svg-icons'

const UserComment = ({ review }) => {
    const data = review || []
    return (
        <div>
            <p className="py-2 pl-2 comment-header">Customer review ({data.length})</p>
            <div>
                {data.map(rv => (

                    <div>
                        <div className="d-flex">
                            <div style={{backgroundColor:'lightgray',borderRadius:'50%',padding:'5px 10px',marginRight:'10px'}}>
                                <FontAwesomeIcon className="text-secondary" icon={faUser} />
                            </div>
                            <h6 className="pt-1"> {rv.customerName}</h6>
                        </div>
                        <div>
                            {
                                rv.rating === 5 && <div>
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                </div>
                            }
                            {
                                rv.rating === 4 && <div>
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                </div>
                            }
                            {
                                rv.rating === 3 && <div>
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                </div>
                            }
                            {
                                rv.rating === 2 && <div>
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                </div>
                            }
                            {
                                rv.rating === 1 && <div>
                                    <FontAwesomeIcon className="text-warning" icon={faStar} />
                                </div>
                            }
                        </div>
                        <div>
                            <p> {rv.review}</p>
                        </div>

                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserComment;