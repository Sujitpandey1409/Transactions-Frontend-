import { TextFieldsRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  OutlinedInput,
} from "@mui/material";
import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import axios from "axios";
import { deployed_url } from "../App";
const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigateToHome = async () => {
    const BASE_URL = "http://localhost:8081/api/";
    console.log(BASE_URL);
    if (!email || !password) {
      enqueueSnackbar("All fields are required");
      console.log("All fields are required");
      return;
    }
    setLoader(true);
    try {
      const response  = await axios.post(`${deployed_url}auth/login`, { email, password });
      enqueueSnackbar("User registered successfully");
      console.log(response.data);
      const {accessToken,balance,name,_id} = await response.data
      localStorage.setItem('accessToken',accessToken)
      localStorage.setItem('userId',_id)
      localStorage.setItem('name',name)
      localStorage.setItem('balance',balance)
      navigate("/home");
    } catch (error) {
      console.log(error);
      if (error.response) {
        enqueueSnackbar(error.response.data.message);
      } else {
        enqueueSnackbar(
          "Something went wrong. Check that the backend is running, reachable and returns valid JSON."
        );
      }
    }
    setLoader(false);
  };
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"100vh"}
      className="bgColour"
    >
      <div className="content">
        <Box
          className="boxFullWidth"
          width={"50vw"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <form className="loginForm" onSubmit={navigateToHome}>
            <h1 color="white">Login</h1>
            <OutlinedInput
              onChange={(e)=>setEmail(e.target.value)}
              type="email"
              className="email"
              placeholder="Please enter your email"
            />
            <OutlinedInput
              onChange={(e)=>setPassword(e.target.value)}
              type="password"
              className="password"
              placeholder="Please enter your password"
            />
            {loader ? (
              <CircularProgress className="center  marginLeft"></CircularProgress>
            ) : (
              <Button
                className="loginButton"
                variant="contained"
                onClick={navigateToHome}
              >
                Login
              </Button>
            )}
            <p>
              Don't have an account <Link to={"/Signup"}>Register here</Link>
            </p>
          </form>
        </Box>
      </div>
    </Box>
  );
};

export default Login;
