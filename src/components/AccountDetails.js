import React from "react";
import {Link} from 'react-router-dom';
import './component.css';
const AccountDetails=props=>{
      
    return(
        <>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/' >Bank Loan</Link>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
        <li className="nav-item">
          <Link className="nav-link active" to="/ApplyLoan">Apply Loan</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Update">Update Account</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div>
  <div className='text-center'>
    <h4>The user is logged In</h4>
  </div>
</div>
        </>
    )

}
export default AccountDetails;