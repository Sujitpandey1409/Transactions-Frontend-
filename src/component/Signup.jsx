import { Box, Button, CircularProgress, OutlinedInput } from "@mui/material";
import { deployed_url } from "../App";
import React, { useRef, useState } from "react";
import { useSnackbar } from "notistack";
import './Login.css'
import { Link } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [loader, setLoader] = useState(false)
  const BASE_URL = 'http://localhost:8081/api/'
  const handleClick = async()=>{
    console.log(BASE_URL);
    if(!name||!email||!password){
        enqueueSnackbar('All fields are required');
        return;
    }
    setLoader(true)
    try {
      await axios.post(`${deployed_url}auth/signup`,{name,email,password})
      enqueueSnackbar('User registered successfully'); 
    } catch (error) {
      console.log(error);
      if (error.response) {
        console.log('here',error.response);
        enqueueSnackbar(error.response.data,{variant: "error",});
      } else {
        enqueueSnackbar(
          "Something went wrong. Check that the backend is running, reachable and returns valid JSON.",
        {variant: "error",});
      }
    }
    setLoader(false)
  }
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} minHeight={"100vh"} className="bgColour">
      <div className="content">
        <Box className="boxFullWidth" width={"50vw"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <form className="loginForm">
            <h1 color="white">Registration</h1>
            <OutlinedInput onChange={(e)=>setName(e.target.value)} className="email" placeholder="Please enter your name"/>
            <OutlinedInput onChange={(e)=>setEmail(e.target.value)} type='email' className="email" placeholder="Please enter your email"/>
            <OutlinedInput onChange={(e)=>setPassword(e.target.value)} type="password" className="password"  placeholder="Please enter your password"/>
            {loader ? 
            <CircularProgress className="center  marginLeft"></CircularProgress>:
              <Button onClick={handleClick} className="loginButton" variant="contained" >Register</Button>}
            <p>Already have an account <Link to={'/'} >Login here</Link></p>
          </form>
        </Box>
      </div>
    </Box>
  );
};

export default Signup;
