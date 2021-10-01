import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
//import { Container, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {connect, useDispatch} from 'react-redux';
import { addUser } from "../actions/CustActions";
import './component.css';
import { useHistory } from "react-router";


const schema = yup.object({
  Name: yup.string().required("Name is required").matches(/^[A-Za-z ]+/,'Name shold contain spaces and alphabets'),
  userName: yup.string().required(),
  password:yup.string().min(6).max(12).required(),
  guardianType:yup.string().required(),
  guardianName:yup.string().required(),
  Address:yup.string().required(),
  citizenShip:yup.string().required(),
  state:yup.string().required(),
  country:yup.string().required(),
  email: yup.string()
         .required('Email is required')
         .email('Email is invalid'),
  gender:yup.string().required(),
  maritalStatus:yup.string().required(),
  contact:yup.string()
          .required('Contact Number is required')
          .matches(/[789]{1}[0-9]{9}/, 'Contact Number should start with 789 and contains 10 digits'),
  dob: yup.string()
         .required('Date of Birth is required'),
        //  .matches(/(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-\d{4}/, 'DOB in DD-MM-YYYY format'),
  acctType: yup.string().required(),   
  branchName  : yup.string().required(), 
  ccitizenStatus: yup.string().required(), 
  //initialDepositAmt:yup.number().positive().integer("Deposit Amount is required").required("Deposit Amount is required"),
  proofType:yup.string().required(),
  documentNo:yup.string().required().min(10).max(12),
  holderName:yup.string().required(),
  holderAcctNo:yup.string().required().matches(/\d{12}/,"Account Number contains 12 digits"),
  holderAddress:yup.string().required(),


}).required();

function AddCustomer(props) {
  let dispatch=useDispatch();
  const { register,setValue, handleSubmit, formState:{ errors },reset } = useForm({
    resolver: yupResolver(schema)
  });

  const calculateAge = (dob1) => {
    var today = new Date();
    var birthDate = new Date(dob1);
    var currAge = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        currAge--;
    }
    return currAge;
  }
  const onValidate=(data)=>{
    //Age Validation
    let age = calculateAge(data.dob);
    data.age=age;
    if( age <= 18){
      alert("Age must be greater than 18");
      return false;
    }
    // set Registration Date
    var today = new Date();
    var month = "";
    if((today.getMonth()+1) <10){
      month = "0"+(today.getMonth()+1)
    }
    else{
      month = (today.getMonth()+1)
    }
    var date = today.getFullYear()+'-'+month+'-'+today.getDate();
    //setValue("regDate", date);
    console.log(date);
    data.regDate=date;
    //Generate Account Number
    var AccountNo ="";
    var randNum1 =Math.floor(1000 + Math.random()*9000);
    var randNum2 =Math.floor(1000 + Math.random()*9000);
    var randNum3 =Math.floor(1000 + Math.random()*9000);
    var randNum4 =Math.floor(1000 + Math.random()*9000);

    AccountNo=AccountNo+randNum1+randNum2+randNum3+randNum4
    data.accountNo = AccountNo

    // Generate Customer id
    var randomNum ="R-"+ Math.floor(Math.random()*(999-100+1)+100);
    data.CustomerId = randomNum;
    

    //Citizen Status
    if(age > 18 && age <= 60){
      setValue("ccitizenStatus","Normal");
    }
    else{
      setValue("ccitizenStatus","Senior");
    }
     //InitialDepositAmount
     if(data.acctType==="Saving"){
      setValue("initialDepositAmt",5000);
      data.initialDepositAmt=5000;
    }
    else{
      setValue("initialDepositAmt",0);
      data.initialDepositAmt=0;
    }

    return true;
  }
  
  let history=useHistory();
  const onSubmit = (data) =>{
        onValidate(data)
        console.log(data)
        if(data.age>18){
        //document.getElementById('idGenerate').innerHTML="<div className='card-header' ><b > CustomerId:</b>"+data.CustomerId+"</div><br><div className='card-header'>Account Number:"+data.accountNo+"</div>"
       history.push({pathname:'/AccountDetails',state:{name:data.Name,id:data.CustomerId,acctNo:data.accountNo}});
  } 
  dispatch(addUser(data));
}
  
  return (
    
    
         <div className="card m-3" id='idGenerate'>
            <h1 className="card-header">Customer Registration</h1>
            <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
              
                 <div className="row">
                   
                        <div className="col">
                              <label>Name</label> 
                              <input {...register("Name")} />
                              <p>{errors.Name?.message}</p>
                         </div>
                   
    
                         <div className="col">
                             <label>UserName</label>
                               <input {...register("userName")} />
                               <p>{errors.userName?.message}</p>
                         </div> 
                   
                         <div className="col">
                             <label>Password</label>
                               <input {...register("password")} type="password"/>
                               <p>{errors.password?.message}</p>
                         </div> 
                   
                  
                    </div>
                    <div className="row">
                         <div className="col">
                             <label>Guardian Type</label>
                             <select {...register("guardianType")}>
                                <option value="">Select..</option>
                                <option value="Father">Father</option>
                                <option value="Husband">Husband</option>

                             </select>
                               <p>{errors.guardianType?.message}</p>
                         </div> 
                         <div className="col">
                             <label>GuardianName</label>
                               <input {...register("guardianName")} />
                               <p>{errors.guardianName?.message}</p>
                         </div>      
                         <div className="col">
                             <label>Address</label>
                               <input {...register("Address")} />
                               <p>{errors.Address?.message}</p>
                         </div> 
                        </div>
                        <div className="row">     
                         <div className="col">
                             <label>CitizenShip</label>
                               <input {...register("citizenShip")} />
                               <p>{errors.citizenShip?.message}</p>
                         </div> 
                         <div className="col">
                             <label>State</label>
                             <select {...register("state")}>
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
                               <p>{errors.state?.message}</p>
                         </div> 
                         <div className="col">
                             <label>Country</label>
                             <select {...register("country")}>
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
                               <p>{errors.country?.message}</p>
                         </div>
                         </div>
                         <div className="row"> 
                         <div className="col">
                             <label>Email Address</label>
                               <input {...register("email")} />
                               <p>{errors.email?.message}</p>
                         </div> 
                         <div className="col">
                             <label>Gender</label>
                             <select {...register("gender")}>
                                  <option value="female">female</option>
                                  <option value="male">male</option>
                                  <option value="other">other</option>
                             </select>
                             <p>{errors.gender?.message}</p>
                         </div>
                         <div className="col">
                             <label>Marital Status</label>
                             <select {...register("maritalStatus")}>
                                  <option value="">Select..</option>
                                  <option value="Single">Single</option>
                                  <option value="Married">Married</option>
                                  <option value="Divorced">Divorced</option>
                             </select>
                             <p>{errors.maritalStatus?.message}</p>
                         </div> 
                         </div>
                         <div className="row">
                         <div className="col">
                             <label>Contact Number</label>
                               <input {...register("contact")} />
                               <p>{errors.contact?.message}</p>
                         </div> 
                         <div className="col">
                             <label>Date Of Birth</label>
                               <input {...register("dob")} type="date"/>
                               <p>{errors.dob?.message}</p>
                         </div> 
                         <div className="col">
                             <label>Registration Date</label>
                               <input {...register("regDate")} type="date" readOnly/>
                               <p>{errors.regDate?.message}</p>
                         </div> 
                        

                         </div>
                         <div className="row">
                         <div className="col">
                             <label>Account Type</label>
                             <select {...register("acctType")}>
                                  <option value="">Select..</option>
                                  <option value="Saving">Saving</option>
                                  <option value="Salary">Salary</option>
                             </select>
                             <p>{errors.acctType?.message}</p>
                         </div>
                         <div className="col">
                             <label>Branch Name</label>
                               <input {...register("branchName")} />
                               <p>{errors.branchName?.message}</p>
                         </div> 
                         <div className="col">
                             <label>Citizen Status</label>
                             <select {...register("ccitizenStatus")}>
                                  <option value="">Select..</option>
                                  <option value="Minor">Minor</option>
                                  <option value="Normal">Normal</option>
                                  <option value="Senior">Senior</option>
                             </select>
                             <p>{errors.ccitizenStatus?.message}</p>
                         </div>
                 
                         </div>
                         <div className="row">
                         <div className="col">
                             <label>Initial Deposit Amount</label>
                               <input {...register("initialDepositAmt")} type="number" readOnly/>
                               <p>{errors.initialDepositAmt?.message}</p>
                         </div> 
                         <div className="col">
                             <label>Identification Proof Type</label>
                               <input {...register("proofType")} />
                               <p>{errors.proofType?.message}</p>
                         </div> 
                         <div className="col">
                             <label>Identification Document No</label>
                               <input {...register("documentNo")} />
                               <p>{errors.documentNo?.message}</p>
                         </div> 

                           </div>
                           <div className="row">
                           <div className="col">
                             <label>account holder name</label>
                               <input {...register("holderName")} />
                               <p>{errors.holderName?.message}</p>
                         </div> 
                         <div className="col">
                             <label>account holder acc. No</label>
                               <input {...register("holderAcctNo")} />
                               <p>{errors.holderAcctNo?.message}</p>
                         </div> 
                         <div className="col">
                             <label>account holder Address</label>
                               <input {...register("holderAddress")} />
                               <p>{errors.holderAddress?.message}</p>
                         </div> 
                             </div>
      <input class="btn btn-dark" type="submit" />&ensp;
      <a href='/Login'>Already a user? Login</a>
     
    </form>
    </div>
    </div>
   
  );
}

export default connect(null,{addUser}) (AddCustomer);

/* <Link to="/userLogin" variant = "body2">
Already an Existing User ? Login here 
</Link> */