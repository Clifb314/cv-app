import React, { useState } from "react";
import Print from "./print";
import { v4 as uuid } from "uuid";
import emptyEmp from "./blanks/emptyEmp";

const Employment = () => {
  const [jobList, setJobList] = useState(emptyEmp);
  const [jobDisp, setJobDisp] = useState(0);
  const [printJob, setPrintJob] = useState(0);

  let jobForm;
  if (jobDisp === 0) {
    jobForm = (
      <form className="employ">
        <fieldset form="employ">
          <label htmlFor="name">Naame of Employer: </label>
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
          <textarea value={jobList.reason} onChange={handleChange} />
          <button type="buttons" onClick={handleSubmit}>
            Submit Section
          </button>
          <button type="button" onClick={increase}>
            Add another Employer?
          </button>
        </fieldset>
      </form>
    );
  } else {
    jobForm = null;
  }

  const handleChange = (e) => {
    const { value, name } = e.target
    setJobDisp(1)
    setPrintJob(1)

    setJobList(prevState => ({
        ...prevState,
        [name]: value,
    }))
  }
  //need handleSubmit then done?

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
    printList = null
  }

  const editJob = (e, id) => {
    const fxn = e.target.className

    let newArr = jobList.jobs.filter(job => {
        if (job.id !== id) {
            return job
        }
    })

    let filtered = jobList.jobs.filter(job => {
        if (job.id === id) {
            return job
        }
    }).shift()

    if (fxn === "editBtn") {
        setJobList({
            ...filtered,
            jobs: [...newArr]
        })
    }

    if (fxn === "deleteBtn") {
        setJobList(prevState => ({
            ...prevState,
            jobs: [...newArr]
        }))
    }
  }


  return (
    <div className="jobs">
        {printList}
        {jobForm}
    </div>
  )
};

export default Employment