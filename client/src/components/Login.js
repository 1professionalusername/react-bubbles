import React, { useState } from "react";
import axiosWithAuth from './axiosWithAuth';


// Stage 1 - Authentication
// Build a login form to authenticate your users.


const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [login, setLogin] = useState({ username: "", password: "" });

  const handleLogin = event => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };

  //Step 1a: Construct an AXIOS request to retrieve a token from the server. You'll use this token to interact with the API
  //Step 1b: Save the token to localStorage
  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("/api/login", login)
      .then(response => {
        localStorage.setItem("token", response.data.payload);
        props.history.push("/bubbles")
      })
      .catch(error => console.log(error.response));
  };


  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={login.username}
          onChange={handleLogin}
        />
        <input
          type="password"
          name="password"
          value={login.password}
          onChange={handleLogin}
        />
        <button>Log in</button>
      </form>
    </>
  );
};





export default Login;
