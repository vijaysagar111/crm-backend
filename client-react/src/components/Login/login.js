import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Navbar from '../Navbar';

const Login = () => {
  const [users, setUsers] = useState({});
    let onSubmitHandler = (e) => {
      e.preventDefault();
     let name = document.getElementById('name').value;
     let password = document.getElementById('password').value;
     setUsers({name,password});
    }
  const [value,setValue] = useState('true');
    useEffect(() => {
      fetch('http://localhost:5515/api/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(users)
    });
    },[]);
    const setToggle = ((value) => {
       setValue(!value);
    })

  
     
      if(value){
        return(
          <div>
        <h1 className=" text-center ">CRM LOGIN</h1>
      <form className="container" >
        <div className="mb-3">
          <label  className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name = "username"
            id = "name"
            
          />
        </div>
        <div className="mb-3">
          <label  className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id = "password"
            
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" >
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary"  onClick = {onSubmitHandler} >
          Submit
        </button>
        <a onClick = {setToggle} className="btn btn-primary">Create Account</a>
      </form> 
      </div>)
      }
      else{
        return null;
      }
};
export default Login