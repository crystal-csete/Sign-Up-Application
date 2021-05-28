/** @format */

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const initialFormValues = {
  fullName: "",
  username: "",
  email: "",
  password: "",
};

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const postNewRegisteredUser = (registered) => {
    axios
      .post("http://localhost:4000/app/signup", registered)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setFormValues(initialFormValues);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const registered = {
      fullName: formValues.fullName.trim(),
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    };
    postNewRegisteredUser(registered);
  };

  return (
    <div>
      <div className='container'>
        <div className='form-div'>
          <form onSubmit={onSubmit}>
            <input
              id='fullName'
              type='text'
              name='fullName'
              placeholder='Full Name'
              onChange={handleChange}
              value={formValues.fullName}
              className='form-control form-group'
            />
            <input
              id='username'
              type='text'
              name='username'
              placeholder='Username'
              onChange={handleChange}
              value={formValues.username}
              className='form-control form-group'
            />
            <input
              id='email'
              type='text'
              name='email'
              placeholder='Email'
              onChange={handleChange}
              value={formValues.email}
              className='form-control form-group'
            />
            <input
              id='password'
              type='password'
              name='password'
              placeholder='Password'
              onChange={handleChange}
              value={formValues.password}
              className='form-control form-group'
            />
            <input
              type='submit'
              className='btn btn-danger btn-block'
              value='submit'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
