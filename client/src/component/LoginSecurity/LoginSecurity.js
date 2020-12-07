import React from 'react';
import { useForm } from "react-hook-form";

const LoginSecurity = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <div style={{ borderBottom: '3px solid #76a333' }}>
                <h4 className="card-title">Change Password</h4>
            </div>
            <div className="col-md-6 m-auto">
                <div className=" mb-4 p-3">
                    <div className="mt-3">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-group">
                                <input type="password" name="oldPassword" className="form-control" id="oldPassword" placeholder="Old Password" ref={register({ required: true })} />
                                {errors.oldPassword && <span>This field is required</span>}
                            </div>

                            <div className="form-group">
                                <input type="password" name="newPassword" className="form-control" id="newPassword" placeholder="New Password" ref={register({ required: true })} />
                                {errors.newPassword && <span>This field is required</span>}
                            </div>

                            <div className="form-group">
                                <input type="password" name="confirmPassword" className="form-control" id="confirmPassword" placeholder="Confirm Password" ref={register({ required: true })} />
                                {errors.confirmPassword && <span>This field is required</span>}
                            </div>

                            <div className="form-froup">
                                <button type="submit" className="btn btn-primary w-100">Submit</button>
                            </div>
                        </form>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default LoginSecurity;