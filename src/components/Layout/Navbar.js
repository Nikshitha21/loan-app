import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';

const NavBar=()=>{
    return (
        
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Bank Loan</Link>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
       
        <li className="nav-item">
          <Link className="nav-link active" to="/">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/ApplyLoan">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Update">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        

    );

}
export default NavBar;