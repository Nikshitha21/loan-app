import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import 'bootstrap/dist/css/bootstrap.css';
import './component.css';
import { useHistory } from "react-router";



const schema = yup.object({
  userName: yup.string().required(),
  password:yup.string().required(),
}).required();

export default function Login() {
let history=useHistory();
    const { register, handleSubmit, formState:{ errors },reset } = useForm({
      resolver: yupResolver(schema)
    });
    const onSubmit = (data) =>{

      console.log(data);
      if(data.userName==='user'){
        if(data.password==='user123'){
          history.push({pathname:'/LoginWelcome',state:{uname:data.userName}});
        }
        else{
          alert("incorrect password");
        }
        
      }
      else{
        alert("incorrect username");
      }
      
       
    } 
    return (
         <div className="card m-3" id='welcome'>
            <h1 className="card-header">Login to portal</h1>
            <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
                  
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
                         <input  className=' btn btn-dark' type="submit" value="Login"/>
                         
             </form>
            </div>
            </div>
                     
  );
}
