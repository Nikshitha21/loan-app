import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './component.css';
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "./Layout/Navbar";
import { useHistory } from "react-router";
const EducationLoan=()=>{
       let history=useHistory();
       const [state,setState]=useState({
              courseFee:'',
              course:'',
              fatherName:'',
              fatherOccupation:'',
              fatherTotalExp:'',
              fatherCurExp:'',
              rationCardNo:'',
              annualIncome:'',

       })
      const onSubmit = (event) =>{
             event.preventDefault();
        axios.post('https://localhost:44313/api/EducationLoans',
        {
               courseFee:state.courseFee,
               course:state.course,
               fatherName:state.fatherName,
               faherOccupation:state.fatherOccupation,
               experience:state.fatherTotalExp,
               curCompanyExp:state.fatherCurExp,
               rationCardNo:state.rationCardNo,
               annualIncome:state.annualIncome
        }).then(response=>{
              console.log(response);
              history.push('/home');
        }
              )
  } 
  const handleEvent=(e)=>{
         setState({...state,[e.target.name]:e.target.value});
         console.log(state);
  }
    return(
        <>
        <NavBar/>
        <div className="card m-3">
            <h1 className="card-header">Education Loan</h1>
            <div className="card-body">
            <form onSubmit={onSubmit} >

            <div>
                   <label for="courseFee">Course Fee</label> 
                   <input type="number" name="courseFee" onChange={handleEvent} required/>
                  
            </div>
            <div>
                   <label for="course">Course</label> 
                   <input type="text" name="course" onChange={handleEvent} required/>
                  
            </div>
            <div>
                   <label for="fatherName">Father Name</label> 
                   <input type="text" name="fatherName" onChange={handleEvent} required/>
                 
            </div>
            <div>
                   <label for="fatherOccupation">Father Occupation</label> 
                   <input type="text" name="fatherOccupation" onChange={handleEvent} required />
                  
            </div>
            <div>
                   <label for="fatherTotalExp">Father’s Total Experience</label> 
                   <input type="number" name="fatherTotalExp" onChange={handleEvent} required />
                 
            </div>
            <div>
                   <label for="fatherExp">Father’s Exp with Current company</label> 
                   <input type="number" name="fatherCurExp" onChange={handleEvent} required/>
                   
            </div>
            <div>
                   <label for="rationCardNo">Ration Card No</label> 
                   <input type="number" name="rationCardNo" onChange={handleEvent} required />
                   
            </div>
            <div>
                   <label for="annualIncome">Annual Income</label> 
                   <input type="number" name="annualIncome" onChange={handleEvent}  required/>
                  
            </div>

           <input className="btn btn-dark" type="submit"/> &ensp;
           <Link to='/ApplyLoan' className='btn btn-dark'>Back</Link>
            </form>
            </div>
            </div></>
    )
}
export default EducationLoan;