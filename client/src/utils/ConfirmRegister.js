import React,{useEffect} from 'react';
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {registrationVerify} from '../redux/actions/authAction'

const ConfirmRegister = (props) => {
  const dispatch = useDispatch()
  const token = props.match.params.token
  const isAuthenticated = useSelector((state) => state.authState.isAuthenticated);
  useEffect(() => {
     
      if(isAuthenticated){
        props.history.push('/my-account');
      }
      // eslint-disable-next-line
    },[isAuthenticated])
  
    return (
        <div style={{ marginTop: '100px' }}>
    <div className="row d-flex justify-content-center align-items-center" style={{height:"400px"}}>
      <button type="button" className="btn btn-primary"  onClick={()=>dispatch(registrationVerify(token))}>Conform verification</button>
</div>
        </div>
    );
};

export default withRouter(ConfirmRegister);