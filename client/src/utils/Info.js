import React from 'react';
import { withRouter } from "react-router-dom";
import { useSelector } from 'react-redux';

const Info = (props) => {
  
    const serverMessage = useSelector((state) => state.authState.serverMessage);
   

    return (
        <div style={{ marginTop: '100px' }}>
      
            <div className="row d-flex justify-content-center align-items-center" style={{height:"400px"}}>
        
           {serverMessage ? (  <div className="alert alert-success" role="alert">{serverMessage}  </div>) : null}
      
            </div>

        </div>
    );
};

export default withRouter(Info);