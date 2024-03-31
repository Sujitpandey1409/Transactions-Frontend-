import React, { useEffect, useState } from "react";
import Table from "../component/Table";
import axios from "axios";
import "./Transactions.css";
import Navbar from "../component/Navbar";
import HeroSection from "../component/HeroSection";
import { deployed_url } from "../App"; 
const Transactions = () => {
  const [tableData, setTableData] = useState();
  const [pageData, setPageData] = useState();
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
        console.log(deployed_url);
      try {
        const response = await axios.get(
          `${deployed_url}transaction/all`
        );
        response.data&&setTableData(response.data.reverse());
        setPageData((pageData) => response.data.slice(0, 10));
      } catch (e) {
        console.error(e);
        alert("Failed to fetch data. Please try again later.");
      }
    };
    fetchData();
  }, []);
  const handleNext = () => {
    if (!tableData) return;
    const current_page = pageNo + 1;
    const current_page_data = tableData.slice(pageNo * 10, current_page * 10);
    if (current_page_data.length) {
      setPageData(current_page_data);
      setPageNo((pageNo) => pageNo + 1);
    }
  };
  const handlePrevious = () => {
    if (!tableData) return;
    const current_page = pageNo - 1;
    const current_page_data = tableData.slice(
      (current_page - 1) * 10,
      current_page * 10
    );
    if (current_page > 0) {
      setPageData(current_page_data);
      setPageNo((pageNo) => pageNo - 1);
    }
  };
  return (
    <div className="transactionContainer">
    <Navbar />
    <HeroSection transaction={true} />
    <div className="PaginationApp">
      <h1>Transaction History Table</h1>
      {pageData && <Table pageData={pageData} pageNo={pageNo} />}
      <div className="buttonContainer">
        <button onClick={handlePrevious}>Previous</button>
        <div className="pageNoContainer">{pageNo}</div>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
    </div>
  );
};

export default Transactions;
