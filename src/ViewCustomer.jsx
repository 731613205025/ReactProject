import React from "react";

export const ViewCustomer = () => {
  return (
    <div>
      <h1>List of Customers </h1>
      <ul
        style={{ listStyle: "none", fontFamily: "cursive", fontSize: "1.5rem" }}
      >
        {customers.map((customer) => (
          <li>{customer}</li>
        ))}
      </ul>
    </div>
  );
};
