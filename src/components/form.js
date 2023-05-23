import React, { useState } from "react";
import emptyPerson from "./blanks/emptyPerson";
import Print from "./print";

const Form = () => {
  const [personal, setPersonal] = useState(emptyPerson);
  const [basicDisplay, setBasicDisplay] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonal((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    setBasicDisplay(1);

    //maybe print out the results
  };

  let screen;
  if (basicDisplay === 1) {
    screen = <Print input={personal} />;
  }

  if (basicDisplay === 0) {
    screen = (
      <form id="basic">
        <p>First, please enter some personal information</p>
        <fieldset form="basic">
          <label htmlFor="fname">First Name: </label>
          <input
            type="text"
            name="fname"
            value={personal.fname}
            onChange={handleChange}
          />
          <label htmlFor="lnam">Last Name: </label>
          <input
            type="text"
            name="lname"
            value={personal.lname}
            onChange={handleChange}
          />
          <label htmlFor="age">Age: </label>
          <input
            type="number"
            name="age"
            value={personal.age}
            onChange={handleChange}
          />
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            name="address"
            value={personal.address}
            onChange={handleChange}
          />
          <label htmlFor="city">City: </label>
          <input
            type="text"
            name="city"
            value={personal.city}
            onChange={handleChange}
          />
          <label htmlFor="zip">Zip-code: </label>
          <input
            type="number"
            name="zip"
            value={personal.zip}
            onChange={handleChange}
          />
          <label htmlFor="email">e-mail address: </label>
          <input
            type="email"
            name="email"
            value={personal.email}
            onChange={handleChange}
          />
          <label htmlFor="pnum">Phone Number: </label>
          <input
            type="number"
            name="pnum"
            value={personal.pnum}
            onChange={handleChange}
          />
          <button
            type="submit"
            form="basic"
            onClick={handleSubmit}
            className="submit"
          >
            Submit Section
          </button>
        </fieldset>
      </form>
    );
  }

  return <div id="personal">{screen}</div>;
};

export default Form;
