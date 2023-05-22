import React, { useState } from "react";
import emptyEdu from "./blanks/emptyEdu";
import Print from "./print";
import { v4 as uuid } from "uuid";

const Education = () => {
  const [eduList, setEduList] = useState(emptyEdu);
  const [schools, setSchools] = useState(0);
  const [prints, setPrints] = useState(0);

  let form;

  const handleChange = (e) => {
    const value = e.target.type === "radio" ? e.target.checked : e.target.value
    const name = e.target.name

    setEduList((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    console.log(eduList)
  };

  const handleSubmit = (e) => {

    setSchools(schools + 1);
    setPrints(1);

    ({ schools, ...rest } = eduList)
    const newEdu = rest

    setEduList((prevState) => ({
      schools: [...prevState.schools, newEdu],
      id: uuid(),
      schoolName: "",
      study: "",
      grad: false,
      start: "",
      end: "",
    }));

    console.log(eduList)
  };

  const increase = (e) => {
    handleSubmit(e);

    setSchools(0);
  };
  let printDisplay;
  if (prints === 1) {
    printDisplay = <Print input={eduList.schools} />;
  }

  if (schools === 0) {
    form = (
      <form className="education">
        <fieldset form="school">
          <label htmlFor="school">College Name:</label>
          <input
            type="text"
            name="schoolName"
            value={eduList.schoolName}
            onChange={handleChange}
          />
          <label htmlFor="study">Field of Study/Major:</label>
          <input
            type="text"
            name="study"
            value={eduList.study}
            onChange={handleChange}
          />
          <div>
            <p>Did you graduate?</p>
            <label htmlFor="gradY">Yes</label>
            <input
              type="radio"
              name="grad"
              id="gradY"
              value="true"
              checked={eduList.grad === true}
              onChange={handleChange}
            />
            <label htmlFor="gradN">No</label>
            <input
              type="radio"
              name="grad"
              id="gradN"
              value="false"
              checked={eduList.grad === false}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="start">Start Date:</label>
          <input
            type="date"
            name="start"
            value={eduList.start}
            onChange={handleChange}
          />
          <label htmlFor="end">End Date:</label>
          <input
            type="date"
            name="end"
            value={eduList.end}
            onChange={handleChange}
          />
          <button type="buttons" onClick={handleSubmit}>
            Submit Section
          </button>
          {/* <button type="button" onClick={remove}>
            Remove
          </button> */}
          <button type="button" onClick={increase}>
            Add another college?
          </button>
        </fieldset>
      </form>
    );
  }

  return (
    <div id="edu">
      {printDisplay}
      {form}
    </div>
  );
};

export default Education;
