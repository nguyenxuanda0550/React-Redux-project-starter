// Action Types
const LOGIN_AUTHED_USER = 'LOGIN_AUTHED_USER';
const LOGOUT_AUTHED_USER = 'LOGOUT_AUTHED_USER';

// Action Creators
const authenticateUser  = (authedUser) => {
  return {
    type: LOGIN_AUTHED_USER,
    authedUser,
  };
};

const signOutUser  = () => {
  return {
    type: LOGOUT_AUTHED_USER,
  };
};

// Thunks
const authenticateUserWithCredentials = (credential) => {
  return (dispatch, getState) => {
    const { users } = getState();
    const user = Object.values(users).find(
      (user) =>
        user.id === credential.username &&
        user.password === credential.password,
    );
    if (!!user) {
      return dispatch(authenticateUser (user));
    } else {
      return false;
    }
  };
};

//Thunk to handle user sign out.
const signOutCurrentUser  = () => {
  return (dispatch) => {
    dispatch(signOutUser ());
  };
};

export {
  LOGIN_AUTHED_USER,
  LOGOUT_AUTHED_USER,
  authenticateUser ,
  signOutUser ,
  authenticateUserWithCredentials,
  signOutCurrentUser ,
};
