import { LOGIN_AUTHED_USER, LOGOUT_AUTHED_USER } from '../actions/authedUser';

const initialState = null;

const authenticatedUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_AUTHED_USER:
      return action.authedUser;
    case LOGOUT_AUTHED_USER:
      return null;
    default:
      return state; // Returns the current state if the action type is not processed
  }
};

export default authenticatedUserReducer;





