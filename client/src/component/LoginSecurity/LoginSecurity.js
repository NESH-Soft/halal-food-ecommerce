import React from 'react';
import { useForm } from "react-hook-form";

const LoginSecurity = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <div style={{ borderBottom: '3px solid #76a333' }}>
                <h4 class="card-title">Change Password</h4>
            </div>
            <div className="col-md-6 m-auto">
                <div class=" mb-4 p-3">
                    <div className="mt-3">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div class="form-group">
                                <input type="password" name="oldPassword" class="form-control" id="oldPassword" placeholder="Old Password" ref={register({ required: true })} />
                            </div>

                            <div class="form-group">
                                <input type="password" name="newPassword" class="form-control" id="newPassword" placeholder="New Password" ref={register({ required: true })} />
                            </div>

                            <div class="form-group">
                                <input type="password" name="confirmPassword" class="form-control" id="confirmPassword" placeholder="Confirm Password" ref={register({ required: true })} />
                            </div>

                            <div className="form-froup">
                                <button type="submit" class="btn btn-primary w-100">Submit</button>
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