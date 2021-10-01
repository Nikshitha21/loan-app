import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './component.css';
import { Link } from "react-router-dom";

const schema = yup.object({
    courseFee:yup.string().required(),
    course:yup.string().required(),
    fatherName:yup.string().required(),
    fatherOccupation:yup.string().required(),
    fatherExp:yup.string().required(),
    fatherExpCC:yup.string().required(),
    rationCard:yup.string().required(),
    annualIncome:yup.number().required(),
}).required();

const EducationLoan=()=>{
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
      const onSubmit = (data) =>{
        
  } 

    return(
        <>
        <div className="card m-3">
            <h1 className="card-header">Education Loan</h1>
            <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} >

            <div>
                   <label>Course Fee</label> 
                   <input {...register("courseFee")} />
                   <p>{errors.courseFee?.message}</p>
            </div>
            <div>
                   <label>Course</label> 
                   <input {...register("course")} />
                   <p>{errors.course?.message}</p>
            </div>
            <div>
                   <label>Father Name</label> 
                   <input {...register("fatherName")} />
                   <p>{errors.fatherName?.message}</p>
            </div>
            <div>
                   <label>Father Occupation</label> 
                   <input {...register("fatherOccupation")} />
                   <p>{errors.fatherOccupation?.message}</p>
            </div>
            <div>
                   <label>Father’s Total Experience</label> 
                   <input {...register("fatherExp")} />
                   <p>{errors.fatherExp?.message}</p>
            </div>
            <div>
                   <label>Father’s Exp with Current company</label> 
                   <input {...register("fatherExpCC")} />
                   <p>{errors.fatherExpCC?.message}</p>
            </div>
            <div>
                   <label>Ration Card No</label> 
                   <input {...register("rationCard")} />
                   <p>{errors.rationCard?.message}</p>
            </div>
            <div>
                   <label>Annual Income</label> 
                   <input {...register("annualIncome")} />
                   <p>{errors.annualIncome?.message}</p>
            </div>

           <input className="btn btn-dark" type="submit"/> &ensp;
           <Link to='/ApplyLoan' className='btn btn-dark'>Back</Link>
            </form>
            </div>
            </div></>
    )
}
export default EducationLoan;