import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Login from './Login';

const PrivateWrapper = ({ loggedIn }) => {
  return (
    <div className="container mt-4">
      {loggedIn ? <Outlet /> : <Login />}
    </div>
  );
};

const mapStateToProps = ({ authUser }) => ({
  loggedIn: !!authUser,
});

export default connect(mapStateToProps)(PrivateWrapper);
