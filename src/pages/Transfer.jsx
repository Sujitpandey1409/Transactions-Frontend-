import "./Transfer.css";
import Navbar from "../component/Navbar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SendIcon from "@mui/icons-material/Send";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import HeroSection from "../component/HeroSection";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { deployed_url } from "../App";
import axios from "axios";
const Transfer = () => {
  const [customer, setCustomer] = useState();
  const [users, setUsers] = useState();
  const [borrowerId, setBorrowerId] = useState();
  const [balance, setBalance] = useState();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [transactionResult, setResult] = useState(
    "Bad luck!Balance insufficient."
  );
  const handleChange = (event) => {
    // setCustomer(event.target.parent);
    setBorrowerId(event.target.value);
    console.log(event.target, event.target.value);
  };
  const fetchUsers = async () => {
    setLoader(true);
    const BASE_URL = "http://localhost:8081/api/";
    try {
      const response = await axios.get(`${deployed_url}user/all`);
      console.log("Users fetched successfully:", response.data);
      setUsers(response.data);
      // navigate("/transactions");
    } catch (error) {
      console.log(error);
      console.log(`${BASE_URL}user/all`);
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
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      window.location.replace("/");
    } else {
      fetchUsers();
    }
  }, []);

  const handleTransfer = async () => {
    setLoader(true);
    const BASE_URL = "http://localhost:8081/api/";
    if(!borrowerId || !balance){
      setResult('All fields are required')
      setShowModal(true)
      return;
    }
    const transferData = {
      lenderId: localStorage.getItem("userId"),
      borrowerId,
      balance
    };
    console.log(transferData);
    console.log('balance entered:',balance);
    if (transferData.balance > localStorage.getItem("balance")) {
      setShowModal(true);
      setResult('Bad luck! Balance insufficient.')
      return;
    }
    try {
      const response = await axios.post(
        `${deployed_url}transaction/transactions`,
        transferData
      );
      console.log("Transaction successfully:", response.data);
      setShowModal(true);
      setResult("Transaction successful ✔");
      localStorage.setItem('balance',localStorage.getItem("balance")-balance)
      // navigate("/transactions");
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
    <div className="transactionContainer">
      {showModal && (
        <div className="modal">
          <p>{transactionResult}</p>
          <Button onClick={()=>transactionResult.includes('✔')?navigate('/transactions'):setShowModal(false)} variant="contained okButton">ok</Button>
        </div>
      )}
      <Navbar />
      <HeroSection />
      <form className="processWrapper">
        <div className="title">Select the customer name below to tranfer</div>
        <div className="dropdownContainer">
          <FormControl sx={{ m: 1, minWidth: 150 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Customer
            </InputLabel>
            <Select style={{textAlign:"left"}}
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={customer}
              onChange={handleChange}
              autoWidth
              label="Customer"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {users ? (
                users.map((el) => {
                  return (
                    <MenuItem key={el._id} value={el._id}>
                      {el.name}
                    </MenuItem>
                  );
                })
              ) : (
                <MenuItem value={"None"}>ItemLoading...</MenuItem>
              )}
            </Select>
          </FormControl>
        </div>
        <div className="title">Enter amount below to tranfer</div>
        <TextField
          onChange={(e) => setBalance(e.target.value)}
          id="standard-basic"
          label="Amount"
          variant="standard"
          type="number"
        />
        
          <Button onClick={handleTransfer} variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        
      </form>
    </div>
  );
};

export default Transfer;
