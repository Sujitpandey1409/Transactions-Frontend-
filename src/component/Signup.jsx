import { TextFieldsRounded } from "@mui/icons-material";
import { Box, Button, FormControl, OutlinedInput } from "@mui/material";
import React from "react";
import './Login.css'
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} minHeight={"100vh"} className="bgColour">
      <div className="content">
        <Box className="boxFullWidth" width={"50vw"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <form className="loginForm">
            <h1 color="white">Registration</h1>
            <OutlinedInput className="email" placeholder="Please enter your name"/>
            <OutlinedInput type='email' className="email" placeholder="Please enter your email"/>
            <OutlinedInput type="password" className="password"  placeholder="Please enter your password"/>
            <Button className="loginButton" variant="contained">Register</Button>
            <p>Already have an account <Link to={'/'} >Login here</Link></p>
          </form>
        </Box>
      </div>
    </Box>
  );
};

export default Signup;
