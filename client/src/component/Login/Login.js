import React from 'react';

const Login = () => {
    return (
        <div>
             <div className="row d-flex justify-content-center">
                <div className="col-md-4">
                    <div class="card mb-4 shadow-lg p-3 bg-white" style={{ width: '28rem' }}>
                        <div class="card-body">
                            <h3 class="card-title">ACCOUNT LOGIN</h3>
                            <div className="">
                                <form>
                                    
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                     
                                    <div className="form-froup">
                                        <button style={{ width: '371px' }} type="submit" class="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                            <br />
                            <p className="text-center">Dont't have an acceount ?<a href="#" class="card-link">Sign Up</a> </p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;