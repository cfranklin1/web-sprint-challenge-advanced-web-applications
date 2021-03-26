import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router';

import axios from "axios";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const initialValues = {
  username: "",
  password: ""
  
};


const Login = () => {
  const [values, setValues] = useState(initialValues);
  const {push} = useHistory();
  //const [credentials, setCredentials] = useState({});
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value});
  };

  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/login", values)
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        push('/BubblePage');
      })
      .catch((err) => {
        console.log(err.message)
      });
  }
   

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>

      <form onSubmit={onSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          values={values.username}
          onChange={onChange}
        />
        
        <label htmlFor="username">Password</label>
        <input
          id="password"
          name="password"
          values={values.password}
          onChange={onChange}
        />
        <button>Log-in</button>
      </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.