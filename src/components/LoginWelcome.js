import React from "react";
import './component.css';
import { Link } from "react-router-dom";
const LoginWelcome=props=>{
    const {uname}=(props.location&&props.location.state)||{}
    return(
        <>
     <div className='acctDetails'>
        <h1>You are logged in as  {uname}</h1>
        <br>
        </br>
        <Link to="/ApplyLoan" className='btn btn-dark'>Apply Loan</Link> &ensp;
        <Link to="/Login" className='btn btn-dark'> LogOut</Link>
        </div>
        </>
    )
}
export default LoginWelcome;