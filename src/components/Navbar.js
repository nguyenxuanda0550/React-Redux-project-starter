import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOutCurrentUser  } from '../actions/authedUser';

const Navbar = ({ dispatch, authUser }) => {
  const logoutHandle = () => {
    dispatch(signOutCurrentUser ());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to={'/'}>
          <span className="fs-4">Employee Poll</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to={'/'}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/add'}>
                New Poll
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/leaderboard'}>
                Leaderboard
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            {authUser ? (
              <>
                <span className="me-3">{authUser.name}</span>
                <button
                  className="btn btn-outline-primary"
                  onClick={logoutHandle}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                className="btn btn-primary"
                to={'/login'}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ authUser }) => ({
  authUser,
});

export default connect(mapStateToProps)(Navbar);
