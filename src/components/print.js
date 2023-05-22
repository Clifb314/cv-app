import React, { useState } from "react";

const Print = ({ input }) => {
  console.log(input);
  if (input.fname) {
    return (
      <div className="personal">
        <p>First Name: {input.fname}</p>
        <p>Last Name: {input.lname}</p>
        <p>Age: {input.age}</p>
        <p>Address: {input.address}</p>
        <p>City: {input.city}</p>
        <p>Zip-code: {input.zip}</p>
        <p>E-mail: {input.email}</p>
        <p>Phone Number: {input.pnum}</p>
      </div>
    );
  }
};

export default Print;
