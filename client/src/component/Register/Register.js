import React,{useEffect} from 'react';
import {Link,withRouter} from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch,useSelector } from 'react-redux';
import './Register.css'
import {registerAction} from '../../redux/actions/authAction'
const Register = (props) => {
    const dispatch = useDispatch();
    const success = useSelector((state) => state.authState.success);
    useEffect(() => {
       
        if(success){
          props.history.push('/info');
        }
        // eslint-disable-next-line
      },[success])
const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
          
          dispatch(registerAction(data))
     
  }; 
    return (
        <div className="register">
            <div className="row d-flex justify-content-center" style={{ marginTop: '100px'}}>
                <div className="col-md-4">
                    <div class="card mb-4 shadow-lg p-3 bg-white" style={{ width: '100%' }}>
                        <div class="card-body">
                            <h3 class="card-title">CREATE ACCOUNT</h3>
                            <div className="">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div class="form-group">
                                        <label for="exampleInputName">Name</label>
                                        <input type="text" class="form-control" name="name" ref={register({ required: true })} id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter name" />
                                        {errors.name && <span>This field is required</span>}
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" name="email" ref={register({ required: true })} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        {errors.email && <span>This field is required</span>}
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPhone1">Phone Number</label>
                                        <input type="number" class="form-control" name="phone" ref={register({ required: true })} id="exampleInputphone1" aria-describedby="emailHelp" placeholder="Enter phone number" />
                                        {errors.phone && <span>This field is required</span>}
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-control" name="password" ref={register({ required: true })} id="exampleInputPassword1" placeholder="Password" />
                                        {errors.password && <span>This field is required</span>}
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleIConfirmnputPassword">Confirm password</label>
                                        <input type="password" name="confirmPassword" ref={register({ required: true })} class="form-control" id="exampleIConfirmnputPassword" placeholder="Password" />
                                        {errors.confirmPassword && <span>This field is required</span>}
                                    </div>
                                    <div className="form-froup">
                                        <button style={{ width: '100%' }} type="submit" class="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                            <br />
                            <p className="text-center">Have already an account ?<Link to="/login" className="card-link">Login here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Register);