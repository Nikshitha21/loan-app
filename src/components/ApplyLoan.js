import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
//import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import './component.css';
import axios from 'axios';
import NavBar from "./Layout/Navbar";

const LoanType=()=>{
      let history = useHistory();
      const [state,setState]=useState({
        loanType:'EducationLoan',
        loanAmount:'',
        applyDate:'',
        loanIssueDate:'',
        issueDate:'',
        rof:'',
        durLoan:'',
        
      })
      const onSubmit = (event) =>{
        event.preventDefault();
          axios.post("https://localhost:44313/api/ApplyLoans",{
            loanType:state.loanType,
            loanAmount:state.loanAmount,
            loanApplyDate:state.applyDate,
            loanIssueDate:state.issueDate,
            rateOfIntrest:state.rof,
            loanDuration:state.durLoan
          }).then(response=>
            console.log(response)).catch(err=>console.log(err)) 
            if(state.loanType==='EducationLoan')
            {
              history.push('/Education');
            } 
            if(state.loanType==='PersonalLoan'){
              history.push('/Personal')
            }
  } 
  const handleEvent=(event)=>{
    //event.preventDefault();
    setState({...state, [event.target.name]: event.target.value});
    console.log(state);

  }

    return(
        <>
        <NavBar/>
        <div className="card m-3">
            <h1 className="card-header">Loan Registration</h1>
            <div className="card-body">
            <form onSubmit={onSubmit} >
               
                         <div>
                             <label for="loanType">Loan Type</label>
                             <select name="loanType" onChange={handleEvent} required>
                                <option value="">Select..</option>
                                <option value="EducationLoan">EducationLoan</option>
                                <option value="PersonalLoan">PersonalLoan</option>

                             </select>
                      
                         </div> 
                         <div>
                              <label for="loanAmount">Loan Amount</label> 
                              <input name="loanAmount" required onChange={handleEvent}/>
                             
                         </div>
                         <div>
                             <label for="applyDate">Loan Apply Date</label>
                               <input type="date" name="applyDate" onChange={handleEvent}/>
                              
                         </div> 
                         <div >
                             <label for="issueDate">Loan Issue Date</label>
                               <input  type="date" name="issueDate" onChange={handleEvent} required/>

                         </div> 
                         <div >
                             <label for="rof">Rate Of interest</label>
                               <input type="text" name="rof" onChange={handleEvent} required />
                              
                         </div> 
                         <div>
                             <label for="durLoan">Loan Duration</label>
                             <select name="durLoan" onChange={handleEvent} required>
                                <option value="">Select..</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                             </select>                      
                         </div> 
                 <input className='btn btn-dark' type="submit"/>
            </form>
         </div>
    </div>
        </>
    )
}

export default LoanType