import React from 'react';
import { useForm } from "react-hook-form";
import Footer from '../Footer/Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './LoginSecurity.css'

const LoginSecurity = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="col-md-12" style={{ marginTop: '100px' }}>
            <Navbar />
        <div className="row d-flex justify-content-center align-items-center login-security">
            <div className="col-md-3">
                <div class="card mb-4 shadow-lg p-3 bg-white" style={{ width: '100%' }}>
                    <div class="card-body">
                        <h4 class="card-title text-center">Change Password</h4>
                        <div className="mt-3">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div class="form-group">
                                    <input type="password" name="oldPassword"  class="form-control" id="oldPassword" placeholder="Old Password" ref={register({ required: true })}/> 
                                </div>

                                <div class="form-group">
                                    <input type="password" name="newPassword"  class="form-control" id="newPassword" placeholder="New Password" ref={register({ required: true })}/> 
                                </div>

                                <div class="form-group">
                                    <input type="password" name="confirmPassword"  class="form-control" id="confirmPassword" placeholder="Confirm Password" ref={register({ required: true })}/> 
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
        </div>
<Footer />
    </div>
    );
};

export default LoginSecurity;