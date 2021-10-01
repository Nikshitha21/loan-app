import React from "react";
import {Link} from 'react-router-dom';
import './component.css';
const AccountDetails=props=>{
       const {name,id,acctNo}=(props.location&&props.location.state)||{}
    return(
        <>
        <div className='acctDetails'>
        <h1>Hello {name}</h1>
        <h3>Your Account Details</h3>
        <div>
          <b> Customer Id: </b>{id}
        </div>
        <div>
         <b> Account Number: </b>{acctNo}
        </div><br/>
        <Link to='/ApplyLoan' className='btn btn-dark'>ApplyLoan</Link> &ensp;
        <Link to="/Login" className='btn btn-dark'> LogOut</Link>
        </div>
        </>
    )

}
export default AccountDetails;