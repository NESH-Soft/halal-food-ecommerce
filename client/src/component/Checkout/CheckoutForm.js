import React from 'react';

const CheckoutForm = () => {
    return (
        <div className="checkout-form">
                <div className="row">
                    <div className="col-md-6 form-group">
                        <label for="exampleInputEmail1">First Name <span className="text-danger">*</span></label>
                        <input type="text" className="form-control " />
                    </div>
                    <div className="col-md-6 form-group">
                        <label for="exampleInputEmail1">Last Name <span className="text-danger">*</span></label>
                        <input type="text" className="form-control " />
                    </div>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email <span className="text-danger">*</span></label>
                    <input type="email" className="form-control " />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Country <span className="text-danger">*</span></label>
                    <h5>Japan</h5>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email <span className="text-danger">*</span></label>
                    <input type="email" className="form-control " />
                </div>
                <div className="row">
                    <div className="col-md-6 form-group">
                        <label for="exampleInputEmail1">Postcode / ZIP<span className="text-danger">*</span></label>
                        <input type="number" className="form-control " />
                    </div>
                    <div className="col-md-6 form-group">
                        <label for="exampleInputEmail1">City<span className="text-danger">*</span></label>
                        <input type="text" className="form-control " />
                    </div>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Address<span className="text-danger">*</span></label>
                    <input type="text" className="form-control " />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Region / State<span className="text-danger">*</span></label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>--please select--</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                    </select>
                </div>
        </div>
    );
};

export default CheckoutForm;