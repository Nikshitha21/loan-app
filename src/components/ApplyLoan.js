import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import './component.css';
import moment from "moment";


const schema = yup.object({
    loanType:yup.string().required(),
    loanAmount:yup.number().required().min(0),
    applyDate: yup.string()
    .required('Loan Apply Date is required'),
    issueDate: yup.string()
    .required('Loan Issue Date is required'),
    rof:yup.number().required(),
    durLoan:yup.string().required(),


}).required();

const LoanType=()=>{
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
      let history = useHistory();
      const onValidateDate=(data)=>{
       
       var today=moment(new Date()).format('YYYY-MM-DD');
        console.log(today);
        console.log(data.applyDate)
             if(data.applyDate<=today){
               alert("Loan Apply Date cannot be Less than Todays Date")
               return false;
             }
        return true;
      }
      const onSubmit = (data) =>{
        if(onValidateDate(data)){
          if(data.loanType==='EducationLoan'){
             history.push('/Education');
          }
          if(data.loanType==='PersonalLoan'){
            history.push('/Personal');
          }
        }

        
  } 

    return(
        <>
        <div className="card m-3">
            <h1 className="card-header">Loan Registration</h1>
            <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} >
               
                         <div>
                             <label>Loan  Type</label>
                             <select {...register("loanType")}>
                                <option value="">Select..</option>
                                <option value="EducationLoan">EducationLoan</option>
                                <option value="PersonalLoan">PersonalLoan</option>

                             </select>
                               <p>{errors.loanType?.message}</p>
                         </div> 
                         <div>
                              <label>Loan Amount</label> 
                              <input {...register("loanAmount")} />
                              <p>{errors.loanAmount?.message}</p>
                         </div>
                         <div>
                             <label>Loan Apply Date</label>
                               <input {...register("applyDate")} type="date"/>
                               <p>{errors.applyDate?.message}</p>
                         </div> 
                         <div >
                             <label>Loan Issue Date</label>
                               <input {...register("issueDate")} type="date"/>
                               <p>{errors.issueDate?.message}</p>
                         </div> 
                         <div >
                             <label>Rate Of interest</label>
                               <input {...register("rof")} />
                               <p>{errors.rof?.message}</p>
                         </div> 
                         <div>
                             <label>Duration of the loan</label>
                             <select {...register("durLoan")}>
                                <option value="">Select..</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>

                             </select>
                               <p>{errors.durLoan?.message}</p>
                         </div> 
                
                 <input className='btn btn-dark' type="submit"/>
            </form>
         </div>
    </div>
        </>
    )
}

export default LoanType