import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './component.css';
import { Link } from "react-router-dom";

const schema = yup.object({
    annualIncome:yup.number().required(),
    compName:yup.string().required(),
    designation:yup.string().required(),
    totalExp:yup.string().required(),
    expCC:yup.string().required(),

  }).required();

const PersonalLoan=()=>{
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
      const onSubmit = (data) =>{
        
  } 

    return(
        <>
        <div className="card m-3">
            <h1 className="card-header">Personal Loan</h1>
            <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} >

            <div>
                   <label>Annual Income</label> 
                   <input {...register("annualIncome")} />
                   <p>{errors.annualIncome?.message}</p>
            </div>
            <div>
                   <label>Company Name</label> 
                   <input {...register("compName")} />
                   <p>{errors.compName?.message}</p>
            </div>
            <div>
                   <label>Designation</label> 
                   <input {...register("designation")} />
                   <p>{errors.designation?.message}</p>
            </div>
            <div>
                   <label>Total Experience</label> 
                   <input {...register("totalExp")} />
                   <p>{errors.totalExp?.message}</p>
            </div>
            <div>
                   <label> Experience with Current company</label> 
                   <input {...register("expCC")} />
                   <p>{errors.expCC?.message}</p>
            </div>
           

           <input className="btn btn-dark" type="submit"/> &ensp;
           <Link to='/ApplyLoan' className='btn btn-dark'>Back</Link>
            </form>
            </div>
            </div></>
    )
}
export default PersonalLoan;