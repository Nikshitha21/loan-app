import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import './component.css';
import { Link } from "react-router-dom";
import NavBar from "./Layout/Navbar";
import { useHistory } from "react-router";


const PersonalLoan=()=>{
      const [state,setState]=useState({
             annualIncome:'',
             company:'',
             designation:'',
             totalExp:'',
             curCompanyExp:'',

      })
      let history=useHistory();
      const onSubmit = (event) =>{
             event.preventDefault();
        axios.post('https://localhost:44313/api/PersonalLoans/',
        {
              annualIncome:state.annualIncome,
              companyName:state.company,
              designation:state.designation,
              totalExp:state.totalExp,
              curCompanyExp:state.curCompanyExp,

        }).then(response=>{
             console.log(response);
             history.push('/Home')
        }).catch(err=>console.log(err));
  } 
  const handleEvent=(e)=>{
       setState({...state, [e.target.name]: e.target.value});
       console.log(state);
  }

    return(
        <>
        <NavBar/>
        <div className="card m-3">
            <h1 className="card-header">Personal Loan</h1>
            <div className="card-body">
            <form onSubmit={onSubmit} >

            <div>
                   <label for="annualIncome">Annual Income</label> 
                   <input type="number" name="annualIncome" onChange={handleEvent} required />
                   
            </div>
            <div>
                   <label for="company">Company Name</label> 
                   <input type="text" name="company" onChange={handleEvent} required />
                   
            </div>
            <div>
                   <label for="designation">Designation</label> 
                   <input type="text" name="designation" onChange={handleEvent} required />
                  
            </div>
            <div>
                   <label for="totalExp">Total Experience</label> 
                   <input type="number" name="totalExp" onChange={handleEvent} required />
                  
            </div>
            <div>
                   <label for="curCompanyExp"> Experience with Current company</label> 
                   <input type="number" name="curCompanyExp" onChange={handleEvent} required />
                 
            </div>
           

           <input className="btn btn-dark" type="submit"/> &ensp;
           <Link to='/ApplyLoan' className='btn btn-dark'>Back</Link>
            </form>
            </div>
            </div></>
    )
}
export default PersonalLoan;