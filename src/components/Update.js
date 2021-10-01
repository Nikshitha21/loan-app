import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import 'bootstrap/dist/css/bootstrap.css';
import './component.css';




const schema = yup.object({
  CustomerId: yup.string().required("CustomerId is required").matches(/^[0-9]{3}/,'CustomerId should not contain spaces and alphabets'),
  Name: yup.string().required(),
  AcctNo:yup.string().required().matches(/^\d{16}/,"Account Number contains 16 digits"),
  country:yup.string().required(),
  state:yup.string().required(),
  gender:yup.string().required(),
  dob: yup.date()
          .required('Date of Birth is required'),
  bankName  : yup.string().required(),
  branchName  : yup.string().required(),
  proofType:yup.string().required(),
  documentNo:yup.string().required().min(10).max(12),
  holderName:yup.string().required(),
  holderAcctNo:yup.string().required(),
  holderAddress:yup.string().required(),
  Address:yup.string().required(),
  contact:yup.string()
             .required('Contact Number is required')
             .matches(/[789]{1}[0-9]{9}/, 'Contact Number should start with 789 and contains 10 digits'),
  email: yup.string()
             .required('Email is required')
             .email('Email is invalid'),
  maritalStatus:yup.string().required(),
  acctType: yup.string().required(),   
  citizenShip:yup.string().required(),
  ccitizenStatus: yup.string().required(), 
  guardianType:yup.string().required(),  
  guardianName:yup.string().required(),
 
}).required();
 function Update() {
  const { register,setValue, handleSubmit, formState:{ errors },reset } = useForm({
    resolver: yupResolver(schema)
  });
  var today = new Date();
    var month = "";
    if((today.getMonth()+1) <10){
      month = "0"+(today.getMonth()+1)
    }
    else{
      month = (today.getMonth()+1)
    }
    var date = today.getFullYear()+'-'+month+'-'+today.getDate();
    setValue("regDate", date);
  
  const onSubmit = (data) =>{
  } 
  
  return (
    
    
         <div className="card m-3"> 
            <h1 className="card-header">Update Account Details</h1>
            <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
              
                 <div className="row">
                   
                        <div className="col">
                              <label>Customer Id</label> 
                              <input {...register("CustomerId")} />
                              <p>{errors.CustomerId?.message}</p>
                         </div>
                   
    
                         <div className="col">
                             <label>Name</label>
                               <input {...register("Name")} />
                               <p>{errors.Name?.message}</p>
                         </div> 
                   
                         <div className="col">
                             <label>Account Number</label>
                               <input {...register("AcctNo")} />
                               <p>{errors.AcctNo?.message}</p>
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
                  
                    </div>
                        
                       
                        
                     <div className="row">     
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
                             <label>Date Of Birth</label>
                               <input {...register("dob")} type="date"/>
                               <p>{errors.dob?.message}</p>
                         </div> 
                         <div className="col">
                             <label>Registration Date</label>
                               <input {...register("regDate")} type="date" readOnly/>
                               <p>{errors.regDate?.message}</p>
                         </div> 
                         <div className="col">
                             <label>Bank Name</label>
                               <input {...register("bankName")} />
                               <p>{errors.bankName?.message}</p>
                         </div> 
                         <div className="col">
                             <label>Branch Name</label>
                               <input {...register("branchName")} />
                               <p>{errors.branchName?.message}</p>
                         </div> 
                     </div>
                         
                    <div className="row">
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
                 <div className="row">
                         <div className="col">
                             <label>Address</label>
                               <input {...register("Address")} />
                               <p>{errors.Address?.message}</p>
                         </div> 
                         <div className="col">
                             <label>Contact Number</label>
                               <input {...register("contact")} />
                               <p>{errors.contact?.message}</p>
                         </div> 
                         <div className="col">
                             <label>Email Address</label>
                               <input {...register("email")} />
                               <p>{errors.email?.message}</p>
                         </div> 
                  </div>       
                     <div className="row">
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
                             <label>CitizenShip</label>
                               <input {...register("citizenShip")} />
                               <p>{errors.citizenShip?.message}</p>
                         </div> 
                     </div>
                     <div className="row">    
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
                 </div>
      <input class="btn btn-dark" type="submit" value='Update' />
     
    </form>
    </div>
    </div>
   
  );
}
export default Update;