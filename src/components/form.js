import React, { useState } from "react";

const Form = () => {
    const [personal, setPersonal] = useState(emptyPerson)

    const handleChange = (e) => {
        const { name, value } = e.target
        setPersonal(() => ({
            [name]: value,
        }))

    }

    const handleSubmit = (e) => {
        const { name, value } = e.target

        //maybe print out the results

    }



    return (
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
          <button type="submit" form="basic" onClick={handleSubmit}>
            Submit Section
          </button>
        </fieldset>
        </form>
    )
}

export default Form