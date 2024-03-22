import { TextFieldsRounded } from "@mui/icons-material";
import { Box, Button, FormControl, OutlinedInput } from "@mui/material";
import React from "react";
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate()
  const navigateToLogin = (e)=>{
    e.preventDefault()
    navigate('/home')
  }
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} minHeight={"100vh"} className="bgColour">
      <div className="content">
        <Box className="boxFullWidth" width={"50vw"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <form className="loginForm" onSubmit={navigateToLogin}>
            <h1 color="white">Login</h1>
            <OutlinedInput type="email" className="email" placeholder="Please enter your email"/>
            <OutlinedInput type="password" className="password"  placeholder="Please enter your password"/>
            <Button className="loginButton" variant="contained" onClick={navigateToLogin}>Login</Button>
            <p>Don't have an account <Link to={'/Signup'} >Register here</Link></p>
          </form>
        </Box>
      </div>
    </Box>
  );
};

export default Login;
