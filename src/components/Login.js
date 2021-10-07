import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './component.css';
import { useHistory } from "react-router";
import {Link} from "react-router-dom";
import axios from 'axios';
import NavBar from './Layout/Navbar';


function Login(props) {
  const [state , setState] = useState({
    userId : '',
    password : '',
})
let history=useHistory();
  
    const submitHandler = (event) =>{
      event.preventDefault();
        axios.post("https://localhost:44347/login/",
        {
          userName:state.userId,
          password:state.password
        }).then(response=>{
          console.log(response);
          history.push('/AccountDetails',)
        }).catch(err=>console.log(err)
        )
        
      
    } 
    const handleChange = (e) => {
        
      setState({...state, [e.target.name]: e.target.value});
      console.log(state.userId,state.password);
  } 
    return (
      <>
      <NavBar/>
      <div className="card m-3" id='welcome'>
<h1 className="card-header">Login to portal</h1>
<div className="card-body">
<form onSubmit={submitHandler} >
           
            <div className="col">
                 <label for="userId">UserName</label>
                   <input type="text" name="userId" className="fadeIn second" onChange={handleChange} required/>
                  
             </div> 
             
             <div className="col">
                 <label for="password">Password</label>
                   <input type="password" name="password" className="fadeIn third" onChange={handleChange} required/>
                   
             </div> 
             <input  className="fadeIn fourth" type="submit" value="Login"/>
            <Link to='/Register'>New User?Register</Link>
             
 </form>
</div>
</div>
        
      </>               
  );
}
export default Login;
