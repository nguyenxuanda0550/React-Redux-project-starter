import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Login from './Login';

const Error404 = ({ loggedIn }) => {
  // If not logged in, render the Login component
  if (!loggedIn) return <Login />;
  
  // If logged in, render the 404 error page
  return (
    <main className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="text-center">
        <p className="h1 text-primary">404</p>
        <h1 className="display-3 font-weight-bold text-dark">Page not found</h1>
        <p className="lead text-secondary">Sorry, we couldn't find the page you're looking for.</p>
        <div className="mt-4">
          <Link
            to="/login"
            className="btn btn-primary btn-lg"
          >
            Go to Login
          </Link>
        </div>
      </div>
    </main>
  );
};

// Map state to props to get the login status
const mapStateToProps = ({ authUser }) => ({
  loggedIn: !!authUser,
});

export default connect(mapStateToProps)(Error404);
