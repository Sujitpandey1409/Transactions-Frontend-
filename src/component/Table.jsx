import React, { Component } from "react";
import "./Table.css";
const Table = ({ pageData, pageNo }) => {
    console.log(pageData);
  return (
    <table>
      <thead>
        <tr>
          <th>Sr. No.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Transaction Status</th>
          <th>Timestamp</th> 
        </tr>
      </thead>
      <tbody>
        {pageData.map((el,counter) => {
          return <tr key={el._id} title="Go for primium to see more details about each user">
            <td>{counter+1+(pageNo-1)*10}</td>
            <td>{el.name}</td>
            <td>{el.email}</td>
            <td>{el.balance}</td>
            <td>{el.createdAt.split("T")[0]}</td>
          </tr>;
        })}
      </tbody>
    </table>
  );
};

export default Table;