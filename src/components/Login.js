import { useState } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authenticateUserWithCredentials } from '../actions/authedUser';

const Login = ({ dispatch, loggedIn }) => {
  const [credentials, setCredentials] = useState({
    username: 'tylermcginnis',
    password: 'abc321',
  });
  const [error, setError] = useState('');

  // Redirect if the user is already logged in
  if (loggedIn) {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectUrl = urlParams.get('redirectTo');
    return <Navigate to={redirectUrl ? redirectUrl : '/'} />;
  }

  // Handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    const res = dispatch(authenticateUserWithCredentials(credentials));
    if (!res) {
      setError('Invalid username or password');
    }
  };

  // Handle login for predefined users
  const handleLogin = (username, password) => {
    dispatch(authenticateUserWithCredentials({ username, password }));
  };

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <h1 className="text-center mb-4">Login</h1>
      <div className="dropdown mb-4">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-testid="existing-user-label"
        >
          Existing User
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>
            <button
              onClick={() => handleLogin('sarahedo', 'password123')}
              className="dropdown-item"
            >
              Sarah Edo
            </button>
          </li>
          <li>
            <button
              onClick={() => handleLogin('tylermcginnis', 'abc321')}
              className="dropdown-item"
            >
              Tyler McGinnis
            </button>
          </li>
          <li>
            <button
              onClick={() => handleLogin('mtsamis', 'xyz123')}
              className="dropdown-item"
            >
              Mike Tsamis
            </button>
          </li>
          <li>
            <button
              onClick={() => handleLogin('zoshikanlu', 'pass246')}
              className="dropdown-item"
            >
              Zenobia Oshikanlu
            </button>
          </li>
        </ul>
      </div>
      <form onSubmit={onSubmit} className="w-100 max-w-sm">
        <div className="mb-3">
          <label htmlFor="username" className="form-label" data-testid="username-label">
            Username
          </label>
          <input
            type="text"
            data-testid="username-input"
            className="form-control"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({
                ...credentials,
                username: e.target.value,
              })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label" data-testid="password-label">
            Password
          </label>
          <input
            type="password"
            data-testid="password-input"
            className="form-control"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({
                ...credentials,
                password: e.target.value,
              })
            }
          />
        </div>
        {error && (
          <div className="alert alert-danger" role="alert" data-testid="error-message">
            {error}
          </div>
        )}
        <button
          type="submit"
          className="btn btn-primary w-100"
          data-testid="submit-login"
        >
          Login
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ authUser }) => ({
  loggedIn: !!authUser,
});

export default connect(mapStateToProps)(Login);

