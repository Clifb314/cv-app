import React, { useState } from "react";

const Print = ({ input }) => {
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

  if (input.schoolName) {
    const grad = input.grad === false ? "No" : "Yes"
    return (
        <div className="education">
            <p>College Name: {input.schoolName}</p>
            <p>Field of Study: {input.study}</p>
            <p>Graduated? : {grad}</p>
            <p>Start Date: {input.start}</p>
            <p>End Date: {input.end}</p>
        </div>
    )
  }
};

export default Print;
