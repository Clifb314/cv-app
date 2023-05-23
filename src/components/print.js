import React, { useState } from "react";

const Print = ({ input }) => {
  if (input.fname) {
    return (
      <div className="display" key={input.id}>
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
    const grad = input.grad === false ? "No" : "Yes";
    return (
      <div className="display" key={input.id}>
        <p>College Name: {input.schoolName}</p>
        <p>Field of Study: {input.study}</p>
        <p>Graduated? : {grad}</p>
        <p>Start Date: {input.start}</p>
        <p>End Date: {input.end}</p>
      </div>
    );
  }

  if (input.name) {
    return (
      <div className="display" key={input.id}>
        <p>Employer Name: {input.name}</p>
        <p>Title: {input.title}</p>
        <p>City: {input.city}</p>
        <p>Start Date: {input.start}</p>
        <p>End Date: {input.end}</p>
        <p>Pay: {input.pay}</p>
        <p>Reason for Leaving: {input.reason}</p>
      </div>
    )
  }
};

export default Print;
