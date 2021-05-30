/** @format */

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./App.css";

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
    <>
      <nav className='navbar navbar-inverse navbar-fixed-top'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <a className='navbar-brand' href='#home'>
              Crystal's Pages
            </a>
          </div>
          <ul className='nav navbar-nav'>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#community'>Community</a>
            </li>
            <li>
              <a href='#signup'>Sign Up</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className='jumbotron' id='home'>
        <h1>Crystal's Pages</h1>
        <p>
          Welcome to our site! We provide nothing but great things at this
          company. We want to share with you all of our things. We network and
          know stuff.
        </p>
      </div>
      <div className='container home'>
        <blockquote>
          <p>
            They made me feel confident they knew what they were doing. I had a
            great experience working with Crystal's Pages, and I would recommend
            them to future clients of mine!
          </p>
          <footer>From a former client</footer>
        </blockquote>
      </div>

      <div className='jumbotron' id='community'>
        <h2>Community at Crystal's Pages</h2>
      </div>

      <div className='container community'>
        <h2>We Love the idea of Community!</h2>
        <p>
          We love to go to community events, we think this is really important.
          We have been to many of these events through the years. These are some
          of those highlights.
        </p>
        <div className='row'>
          <div className='col-md-4'>
            <div className='thumbnail'>
              <a
                href='https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGV2ZW50c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                target='_blank'
                rel='noreferrer'>
                <img
                  src='https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGV2ZW50c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                  alt='Work conference in Denver, Colorado'
                  style={{ width: "100%" }}
                />
                <div className='caption'>
                  <p>
                    This was a conference 10 of our staff got to attend in
                    Denver, Colorado. It was very informative, and helped us
                    grow our network!
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='thumbnail'>
              <a
                href='https://images.unsplash.com/photo-1581966401613-f1a258fe3a2f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGV2ZW50c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                target='_blank'
                rel='noreferrer'>
                <img
                  src='https://images.unsplash.com/photo-1581966401613-f1a258fe3a2f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGV2ZW50c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                  alt='Jazz festival 2019'
                  style={{ width: "100%" }}
                />
                <div className='caption'>
                  <p>
                    This is a community event our staff went to last summer. We
                    had a lot of fun meeting people, and growing our network.
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='thumbnail'>
              <a
                href='https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbmZlcmVuY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                target='_blank'
                rel='noreferrer'>
                <img
                  src='https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbmZlcmVuY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                  alt='Conference room meeting'
                  style={{ width: "100%" }}
                />
                <div className='caption'>
                  <p>
                    This conference call was important to get our merger started
                    in 2017!
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='thumbnail'>
              <a
                href='https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29yayUyMGV2ZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                target='_blank'
                rel='noreferrer'>
                <img
                  src='https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d29yayUyMGV2ZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                  alt='Office with workers at their desks'
                  style={{ width: "100%" }}
                />
                <div className='caption'>
                  <p>Moving into our new office 2020.</p>
                </div>
              </a>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='thumbnail'>
              <a
                href='https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHdvcmslMjBldmVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                target='_blank'
                rel='noreferrer'>
                <img
                  src='https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHdvcmslMjBldmVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                  alt='Presentaion in crowded room.'
                  style={{ width: "100%" }}
                />
                <div className='caption'>
                  <p>
                    Big conference of last year 2020. We attend these regularly.
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='thumbnail'>
              <a
                href='https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fHdvcmslMjBldmVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                target='_blank'
                rel='noreferrer'>
                <img
                  src='https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fHdvcmslMjBldmVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                  alt='Women and men meeting in a crowded room.'
                  style={{ width: "100%" }}
                />
                <div className='caption'>
                  <p>Attending local community event.</p>
                </div>
              </a>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='thumbnail'>
              <a
                href='https://images.unsplash.com/photo-1586991359975-54500b7d8a86?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHdvcmslMjBldmVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                target='_blank'
                rel='noreferrer'>
                <img
                  src='https://images.unsplash.com/photo-1586991359975-54500b7d8a86?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHdvcmslMjBldmVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                  alt='Letters spell out work from home.'
                  style={{ width: "100%" }}
                />
                <div className='caption'>
                  <p>
                    When COVID-19 hit, we were still operational, letting our
                    staff all work from home.
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='thumbnail'>
              <a
                href='https://images.unsplash.com/photo-1556761175-4b46a572b786?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHdvcmslMjBldmVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                target='_blank'
                rel='noreferrer'>
                <img
                  src='https://images.unsplash.com/photo-1556761175-4b46a572b786?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHdvcmslMjBldmVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                  alt='Workers at their desks.'
                  style={{ width: "100%" }}
                />
                <div className='caption'>
                  <p>
                    The workers who wish to return to work, can have a nice,
                    socially distanced work environment!
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='thumbnail'>
              <a
                href='https://images.unsplash.com/photo-1590402494811-8ffd29f17543?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHx3b3JrJTIwZXZlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                target='_blank'
                rel='noreferrer'>
                <img
                  src='https://images.unsplash.com/photo-1590402494811-8ffd29f17543?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHx3b3JrJTIwZXZlbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                  alt='Two workers in masks drawing on a whiteboard.'
                  style={{ width: "100%" }}
                />
                <div className='caption'>
                  <p>
                    We will continue to work safely through this pandemic
                    together, providing our clients the same level of attention
                    to detail and care that we always have.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='container' id='signup'>
        <div className='jumbotron'>
          <h2>Sign Up</h2>
        </div>
        <div className='container signup'>
          <div className='panel panel-primary'>
            <div className='panel-heading'>Register below to get started</div>
            <div className='panel-body'>
              Fill in the form to register for this site, and gain access to
              future features.
            </div>
          </div>

          <div className='form-div signup'>
            <form onSubmit={onSubmit} className='d-grid gap-4'>
              <label for='fullName'>Full Name:</label>
              <input
                id='fullName'
                type='text'
                name='fullName'
                placeholder='Full Name'
                onChange={handleChange}
                value={formValues.fullName}
                className='form-control form-group'
              />
              <label for='username'>Username:</label>
              <input
                id='username'
                type='text'
                name='username'
                placeholder='Username'
                onChange={handleChange}
                value={formValues.username}
                className='form-control form-group'
              />
              <label for='email'>Email:</label>
              <input
                id='email'
                type='text'
                name='email'
                placeholder='Email'
                onChange={handleChange}
                value={formValues.email}
                className='form-control form-group'
              />
              <label for='pwd'>Password:</label>
              <input
                id='password'
                type='password'
                name='password'
                placeholder='Password'
                onChange={handleChange}
                value={formValues.password}
                className='form-control form-group'
              />
              <div className='checkbox'>
                <label>
                  <input type='checkbox' /> Remember me
                </label>
              </div>
              <input
                type='submit'
                className='btn btn-primary btn-lg'
                value='Submit'
              />
            </form>
          </div>
        </div>
      </div>
      <nav className='navbar navbar-inverse navbar-fixed-bottom'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <a className='navbar-brand' href='#home'>
              Crystal's Pages &#169; 2021 All Rights Reserved.
            </a>
          </div>
          <p className='footer__text'>Contact Us by Phone: 1 (555)-555-5555</p>
          <p className='footer__text'>
            Contact Us by Email: crystal'spages@mail.com
          </p>
        </div>
      </nav>
    </>
  );
};

export default App;

