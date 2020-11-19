import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div style={{ marginTop: '100px' }}>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-3">
                    <div class="card mb-4 shadow-lg p-3 bg-white" style={{ width: '100%' }}>
                        <div class="card-body">
                            <h3 class="card-title text-center">LOGIN</h3>
                            <div className="mt-5">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" name="email" ref={register({ required: true })} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        {errors.email && <span>This field is required</span>}
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" name="password" ref={register({ required: true })} class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                        {errors.password && <span>This field is required</span>}
                                    </div>

                                    <div className="form-froup">
                                        <button type="submit" class="btn btn-primary w-100">Submit</button>
                                    </div>
                                </form>
                            </div>
                            <br />
                            <p className="text-center">Dont't have an acceount ?<Link to="/register" class="card-link">Sign Up</Link> </p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;