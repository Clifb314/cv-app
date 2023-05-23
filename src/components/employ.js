import React, { useState } from "react";
import Print from "./print";
import { v4 as uuid } from "uuid";
import emptyEmp from "./blanks/emptyEmp";

const Employment = () => {
  const [jobList, setJobList] = useState(emptyEmp);
  const [jobDisp, setJobDisp] = useState(0);
  const [printJob, setPrintJob] = useState(0);

  const handleChange = (e) => {
    const { value, name } = e.target;

    setJobList((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    setJobDisp(1);
    setPrintJob(1);

    const { jobs, ...rest } = jobList;
    const newJob = rest;

    setJobList((prevState) => ({
      jobs: [...prevState.jobs, newJob],
      id: uuid(),
      name: "",
      title: "",
      city: "",
      start: "",
      end: "",
      pay: "",
      reason: "",
    }));
  };

  const increase = (e) => {
    handleSubmit(e);

    setJobDisp(0);
  };

  let jobForm;
  if (jobDisp === 0) {
    jobForm = (
      <form className="employ">
        <p>Enter your employment history</p>
        <fieldset form="employ">
          <label htmlFor="name">Name of Employer: </label>
          <input
            type="text"
            name="name"
            value={jobList.name}
            onChange={handleChange}
          />
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            value={jobList.title}
            onChange={handleChange}
          />
          <label htmlFor="start">Start Date:</label>
          <input
            type="date"
            name="start"
            value={jobList.start}
            onChange={handleChange}
          />
          <label htmlFor="end">End Date:</label>
          <input
            type="date"
            name="end"
            value={jobList.end}
            onChange={handleChange}
          />
          <label htmlFor="city">City: </label>
          <input
            type="text"
            name="city"
            value={jobList.city}
            onChange={handleChange}
          />
          <label htmlFor="pay">Salary (hourly): </label>
          <input
            type="text"
            name="pay"
            value={jobList.pay}
            onChange={handleChange}
          />
          <label htmlFor="reason">Reason for Leaving: </label>
          <textarea name="reason" value={jobList.reason} onChange={handleChange} />
          <button type="button" onClick={handleSubmit} className="submit">
            Submit Section
          </button>
          <button type="button" onClick={increase} className="add">
            Add another Employer?
          </button>
        </fieldset>
      </form>
    );
  } else {
    jobForm = null;
  }

  const editJob = (e, id) => {
    const fxn = e.target.className;

    let newArr = jobList.jobs.filter((job) => job.id !== id);

    let filtered = jobList.jobs.filter((job) => job.id === id).shift();

    if (fxn === "editBtn") {
      setJobList({
        ...filtered,
        jobs: [...newArr],
      });
    }

    if (fxn === "deleteBtn") {
      setJobList((prevState) => ({
        ...prevState,
        jobs: [...newArr],
      }));
    }
  };

  let printList;
  if (printJob === 1) {
    printList = jobList.jobs.map((job) => {
      return (
        <div className="jobs">
          <Print input={job} />
          <button
            type="button"
            className="editBtn"
            onClick={(e) => editJob(e, job.id)}
          >
            Edit?
          </button>
          <button
            type="button"
            className="deleteBtn"
            onClick={(e) => editJob(e, job.id)}
          >
            Delete?
          </button>
        </div>
      );
    });
  } else {
    printList = null;
  }

  return (
    <div id="jobs">
      {printList}
      {jobForm}
    </div>
  );
};

export default Employment;
