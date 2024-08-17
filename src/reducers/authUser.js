// import { LOGIN_AUTHED_USER, LOGOUT_AUTHED_USER } from '../actions/authedUser';


// const authUser = (state = null, action) => {
//   switch (action.type) {
//     case LOGIN_AUTHED_USER:
//       return action.authedUser;
//     case LOGOUT_AUTHED_USER:
//       return null;
//     default:
//       return state;
//   }
// };

// export default authUser;

//22222222222222222222222222222

// import { LOGIN_AUTHED_USER, LOGOUT_AUTHED_USER } from '../actions/authedUser';

// const initialState = null;

// const authUser = (state = initialState, action) => {
//   switch (action.type) {
//     case LOGIN_AUTHED_USER:
//       return action.payload;
//     case LOGOUT_AUTHED_USER:
//       return initialState;
//     default:
//       return state;
//   }
// };

// export default authUser;



///////////////////33333333333333333333333333

import { LOGIN_AUTHED_USER, LOGOUT_AUTHED_USER } from '../actions/authedUser';

const initialState = null;

const authenticatedUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_AUTHED_USER:
      return action.authedUser;
    case LOGOUT_AUTHED_USER:
      return null;
    default:
      return state; // Trả về trạng thái hiện tại nếu không xử lý loại hành động
  }
};

export default authenticatedUserReducer;





