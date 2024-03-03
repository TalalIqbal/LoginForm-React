import React, { useEffect } from 'react';
import './LoginForm.css';

const LoginForm = () => {

  useEffect(() => {
    const loginContainer = document.getElementById('loginContainer');
    loginContainer.classList.add('sign-in');

    return () => {
      loginContainer.classList.remove('sign-in');
      loginContainer.classList.remove('sign-up');
    };
  }, []);

  const toggle = () => {
    const loginContainer = document.getElementById('loginContainer');
    loginContainer.classList.toggle('sign-in');
    loginContainer.classList.toggle('sign-up');
  };


  return (
    <div id="loginContainer" className="loginContainer">

      <div className="loginrow">

        <div className="col align-items-center flex-col sign-up">
          <div className="form-wrapper align-items-center">
            <div className="form sign-up">
              <div className="input-group">
                <i className='bx bxs-user'></i>
                <input type="logintext" placeholder="Username" />
              </div>
              <div className="input-group">
                <i className='bx bx-mail-send'></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-group">
                <i className='bx bxs-lock-alt'></i>
                <input type="password" placeholder="Password" />
              </div>
              <div className="input-group">
                <i className='bx bxs-lock-alt'></i>
                <input type="password" placeholder="Confirm password" />
              </div>
              <button>
                Sign up
              </button>
              <p>
                <span>
                  Already have an account?
                </span>
                <b onClick={toggle} className="pointer">
                  Sign in here
                </b>
              </p>
            </div>
          </div>

        </div>

        <div className="col align-items-center flex-col sign-in">
          <div className="form-wrapper align-items-center">
            <div className="form sign-in">
              <div className="input-group">
                <i className='bx bxs-user'></i>
                <input type="logintext" placeholder="Username" />
              </div>
              <div className="input-group">
                <i className='bx bxs-lock-alt'></i>
                <input type="password" placeholder="Password" />
              </div>
              <button>
                Sign in
              </button>
              <p>
                <b>
                  Forgot password?
                </b>
              </p>
              <p>
                <span>
                  Don't have an account?
                </span>
                <b onClick={toggle} className="pointer">
                  Sign up here
                </b>
              </p>
            </div>
          </div>
          <div className="form-wrapper">

          </div>
        </div>

      </div>

      <div className="loginrow content-loginrow">

        <div className="col align-items-center flex-col">
          <div className="logintext sign-in">
            <h2>
              Welcome
            </h2>
          </div>
          <div className="img sign-in">

          </div>
        </div>

        <div className="col align-items-center flex-col">
          <div className="img sign-up">

          </div>
          <div className="logintext sign-up">
            <h2>
              Join with us
            </h2>
          </div>
        </div>

      </div>

    </div>
  );
};

export default LoginForm;
