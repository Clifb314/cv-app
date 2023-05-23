import React, { useState } from "react";
import emptyEdu from "./blanks/emptyEdu";
import Print from "./print";
import { v4 as uuid } from "uuid";

const Education = () => {
  const [eduList, setEduList] = useState(emptyEdu);
  const [eduDisplay, setEduDisplay] = useState(0);
  const [prints, setPrints] = useState(0);

  let form;

  const handleChange = (e) => {
    const value = e.target.type === "radio" ? e.target.checked : e.target.value;
    const name = e.target.name;

    setEduList((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    console.log(eduList);
  };

  const handleSubmit = (e) => {
    setEduDisplay(1);
    setPrints(1);

    const { schools, ...rest } = eduList;
    const newEdu = rest;

    setEduList((prevState) => ({
      schools: [...prevState.schools, newEdu],
      id: uuid(),
      schoolName: "",
      study: "",
      grad: false,
      start: "",
      end: "",
    }));

    console.log(eduList);
  };

  const increase = (e) => {
    handleSubmit(e);

    setEduDisplay(0);
  };
  let printDisplay;
  if (prints === 1) {
    printDisplay = eduList.schools.map((college) => {
      return (
        <div className="colleges">
          <Print input={college} />
          <button
            type="button"
            className="editBtn"
            onClick={(e) => editCollege(e, college.id)}
          >
            Edit?
          </button>
          <button
            type="button"
            className="deleteBtn"
            onClick={(e) => editCollege(e, college.id)}
          >
            Delete?
          </button>
        </div>
      );
    });
  } else {
    printDisplay = null;
  }

  const editCollege = (e, id) => {
    const fxn = e.target.className;

    let newArr = eduList.schools.filter((college) => college.id !== id);

    let filtered = eduList.schools
      .filter((college) => college.id === id)
      .shift();

    if (fxn === "editBtn") {
      setEduList({
        ...filtered,
        schools: [...newArr],
      });
    }

    if (fxn === "deleteBtn") {
      setEduList((prevState) => ({
        ...prevState,
        schools: [...newArr],
      }));
    }
    setEduDisplay(0);
  };

  if (eduDisplay === 0) {
    form = (
      <form className="education">
        <p>Enter your education history</p>
        <fieldset form="education">
          <label htmlFor="schoolName">College Name: </label>
          <input
            type="text"
            name="schoolName"
            value={eduList.schoolName}
            onChange={handleChange}
          />
          <label htmlFor="study">Field of Study/Major: </label>
          <input
            type="text"
            name="study"
            value={eduList.study}
            onChange={handleChange}
          />
          <div className="radio">
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
          <label htmlFor="start">Start Date: </label>
          <input
            type="date"
            name="start"
            value={eduList.start}
            onChange={handleChange}
          />
          <label htmlFor="end">End Date: </label>
          <input
            type="date"
            name="end"
            value={eduList.end}
            onChange={handleChange}
          />
          <button type="buttons" onClick={handleSubmit} className="submit">
            Submit Section
          </button>
          {/* <button type="button" onClick={remove}>
            Remove
          </button> */}
          <button type="button" onClick={increase} className="add">
            Add another college?
          </button>
        </fieldset>
      </form>
    );
  } else {
    form = null;
  }

  return (
    <div id="edu">
      {printDisplay}
      {form}
    </div>
  );
};

export default Education;
