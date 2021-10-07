import React,{useState} from "react";

//import { yupResolver } from '@hookform/resolvers/yup';
//import * as yup from "yup";
//import { Container, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import {connect, useDispatch} from 'react-redux';
//import { addUser } from "../actions/CustActions";
import './component.css';
//import { useHistory } from "react-router";
import Axios from "axios";


function AddCustomer(props) {
  // var today = new Date();
  //   var month = "";
  //   if((today.getMonth()+1) <10){
  //     month = "0"+(today.getMonth()+1)
  //   }
  //   else{
  //     month = (today.getMonth()+1)
  //   }
  //   var date = today.getFullYear()+'-'+month+'-'+today.getDate();
  var date=new Date().toISOString().substr(0,10);
  console.log(date);
 
 let [userObj,setUserObj]=useState({
  name:null,
  userName:null,
  password:null,
  guardianType:'Father',
  guardianName:null,
  address:null,
  citizenship:null,
  state:'Telangana',
  country:'India',
  email:null,
  maritalStatus:'Single',
  contact:null,
  dob:null,
  regDate:date,
  acctType:'Savings',
  branchName:'enter branch name',
  citizenStatus:'Minor',
  depositAmount:'0',
  proofType:'pan',
  docNumber:'9090909090',
  holderName:'nikshitha',
  holderAcctNumber:'787878787',
  holderAddress:'hhdkjkjd',
})
let threshold={
  name:userObj.name,
  userName:userObj.userName,
  password:userObj.password,
  guardianType:userObj.guardianType,
  guardianName:userObj.guardianName,
  address:userObj.sddress,
  citizenship:userObj.citizenship,
  state:userObj.state,
  country:userObj.country,
  email:userObj.email,
  maritalStatus:userObj.maritalStatus,
  contactNo:userObj.contact,
  dob:userObj.dob,
  regDate:userObj.regDate,
  accType:userObj.acctType,
  branchName:userObj.branchName,
  citizenStatus:userObj.citizenStatus,
  depositAmmount:userObj.depositAmount,
 proofType:userObj.proofType,
 docNumber:userObj.docNumber,
 holderName : userObj.holderName,
 holderAcctNumber:userObj.holderAcctNumber,
 holderAddress:userObj.holderAddress,

}
const submitHandler=(event)=>{
  event.preventDefault();
  Axios
  ({
  method:"Post",
  url:'https://localhost:44347/api/UserDetails/',
  data:JSON.stringify(threshold),
headers:{"Content-Type":"application/json"},
})
.then(response=>{
 console.log(response);
})
.catch(err=>{
  console.log(err);
}
)}
const handleChange = (e) => {
  const {id , value} = e.target   
  setUserObj(prevState => ({
      ...prevState,
      [id] : value
  })); 
}

  return (
    
    
         <div className="card m-3" id='idGenerate'>
            <h1 className="card-header">Customer Registration</h1>
            <div className="card-body">
            <form onSubmit={submitHandler}>
                
                 <div className="row">
                   
                        <div className="col">
                              <label for="name">Name</label> 
                              <input type="text" name="name" value={userObj.name} onChange={handleChange} required/>
                            
    
                         </div>
                   
    
                         <div className="col">
                             <label for="userName">UserName</label>
                               <input type="text" name="userName" value={userObj.userName} onChange={handleChange}/>
              
                         </div> 
                   
                         <div className="col">
                             <label for="password">Password</label>
                               <input type="password" name="password" type="password" value={userObj.password} onChange={handleChange}/>
              
                         </div> 
                   
                  
                    </div>
                    <div className="row">
                         <div className="col">
                             <label for="guardianType">Guardian Type</label>
                             <select name="guardianType" value={userObj.guardianType} onChange={handleChange}>
                                <option value="">Select..</option>
                                <option value="Father">Father</option>
                                <option value="Husband">Husband</option>

                             </select>
                      
                         </div> 
                         <div className="col">
                             <label for="guardianName">GuardianName</label>
                               <input type="text" name="guardianName" value={userObj.guardianName} onChange={handleChange}/>
                      
                         </div>      
                         <div className="col">
                             <label for="address">Address</label>
                               <input type="text" name="address" value={userObj.address} onChange={handleChange} />
            
                         </div> 
                        </div>
                        <div className="row">     
                         <div className="col">
                             <label for="citizenship">CitizenShip</label>
                               <input type="text" name="citizenship" value={ userObj.citizenship} onChange={handleChange} />
                    
                         </div> 
                         <div className="col">
                             <label for="state">State</label>
                             <select  name="state" value={userObj.state} onChange={handleChange}>
                                <option value="">Select..</option>
                                <option value="AndhraPradesh">AndhraPradesh</option>
                                <option value="TamilNadu">TamilNadu</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Maharastra">Maharastra</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Odissa">Odissa</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="MadhyaPradesh">MadhyaPradesh</option>
                             </select>
        
                         </div> 
                         <div className="col">
                             <label for="country">Country</label>
                             <select name="country" value={userObj.country} onChange={handleChange}>
                                <option value="">Select..</option>
                                <option value="Afghanisthan">Afghanisthan</option>
                                <option value="Australia">Australia</option>
                                <option value="Russia">Russia</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="India">India</option>
                                <option value="UK">UK</option>
                                <option value="China">China</option>
                                <option value="Maldives">Maldives</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Singapore">Singapore</option>
                             </select>
            
                         </div>
                         </div>
                         <div className="row"> 
                         <div className="col">
                             <label for="email">Email Address</label>
                               <input type="email" value={userObj.email} name="email" onChange={handleChange}/>
        
                         </div> 
        
                         
                         <div  className="col">
                             <label for="maritalStatus">Marital Status</label>
                             <select name="maritalStatus" value={userObj.maritalStatus} onChange={handleChange}>
                                  <option value="">Select..</option>
                                  <option value="Single">Single</option>
                                  <option value="Married">Married</option>
                                  <option value="Divorced">Divorced</option>
                             </select>
                      
                         </div> 
                         </div>
                         <div className="row">
                         <div className="col">
                             <label for="contact">Contact Number</label>
                               <input type="number" name="contact" value={userObj.contact} onChange={handleChange} />
            
                         </div> 
                         <div className="col">
                             <label for="dob">Date Of Birth</label>
                               <input type="date" name="dob" max={date} value={userObj.dob} onChange={handleChange}/>
    
                         </div> 
                         <div className="col">
                             <label for="regDate">Registration Date</label>
                               <input type="date" name="regDate"onChange={handleChange} defaultValue={userObj.regDate} disabled/>
            
                         </div> 
                        

                         </div>
                         <div className="row">
                         <div className="col">
                             <label for="acctType">Account Type</label>
                             <select name="acctType" value={userObj.acctType} onChange={handleChange}>
                                  <option value="">Select..</option>
                                  <option value="Saving">Saving</option>
                                  <option value="Salary">Salary</option>
                             </select>
            
                         </div>
                         <div className="col">
                             <label for="branchName">Branch Name</label>
                               <input type="text" name="branchName" value={userObj.branchName} onChange={handleChange}/>
                  
                         </div> 
                         <div className="col">
                             <label for="citizenStatus">Citizen Status</label>
                             <select name="citizenStatus" value={userObj.citizenship} onChange={handleChange}>
                                  <option value="">Select..</option>
                                  <option value="Minor">Minor</option>
                                  <option value="Normal">Normal</option>
                                  <option value="Senior">Senior</option>
                             </select>
                        
                         </div>
                 
                         </div>
                         <div className="row">
                         <div className="col">
                             <label for="depositAmount">Initial Deposit Amount</label>
                               <input  type="number" name="depositAmount" onChange={handleChange} readOnly/>
                               
                         </div> 
                         <div className="col">
                             <label for="proofType">Identification Proof Type</label>
                               <input type="text" name="proofType" onChange={handleChange}/>
                
                         </div> 
                         <div className="col">
                             <label for="documentNumber">Identification Document No</label>
                               <input type="text" name="documentNumber" onChange={handleChange} />
                  
                         </div> 

                           </div>
                           <div className="row">
                           <div className="col">
                             <label for="holderName">account holder name</label>
                               <input type="text" name="documentNumber" onChange={handleChange} />
                  
                         </div> 
                         <div className="col">
                             <label for="holderAcctNumber">account holder acc. No</label>
                               <input type="text" name="holderAcctNumber" onChange={handleChange} />
                      
                         </div> 
                         <div className="col">
                             <label for="holderAddress">account holder Address</label>
                               <input type="text" name="holderAddress" onChange={handleChange}/>  
                         </div> 
                       </div>      
                             <input type='submit'value='Register'/>
      <a href='/Login'>Already a user? Login</a>
     
    </form>
    </div>
    </div>
   
  );
}

export default  AddCustomer;

/* <Link to="/userLogin" variant = "body2">
Already an Existing User ? Login here 
</Link> */