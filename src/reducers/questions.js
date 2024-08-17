// import {ADD_ANSWER_TO_QUESTION, CREATE_NEW_QUESTION, LOAD_QUESTIONS } from '../actions/polls';


// const questions = (state = {}, action) => {
//   switch (action.type) {
//     case LOAD_QUESTIONS:
//       return {
//         ...state,
//       };
//     case CREATE_NEW_QUESTION:
//       return {
//         ...state,
//         [action.question.id]: action.question,
//       };
//     case ADD_ANSWER_TO_QUESTION:
//       return {
//         ...state,
//         [action.qid]: {
//           ...state[action.qid],
//           [action.answer]: {
//             ...state[action.qid][action.answer],
//             votes: state[action.qid][action.answer].votes.concat(
//               action.authUser,
//             ),
//           },
//         },
//       };
//     default:
//       return state;
//   }
// };

// export default questions;



//---------------22222222222222222222222222222
import { ADD_ANSWER_TO_QUESTION, CREATE_NEW_QUESTION, LOAD_QUESTIONS } from '../actions/polls';

const initialState = {};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_QUESTIONS:
      // Cập nhật trạng thái với các câu hỏi nhận được
      return {
        ...state,
        ...action.questions,
      };
    case CREATE_NEW_QUESTION:
      // Thêm câu hỏi mới vào trạng thái
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case ADD_ANSWER_TO_QUESTION:
      // Cập nhật câu trả lời cho câu hỏi cụ thể
      const { qid, answer, authedUser } = action;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: [...state[qid][answer].votes, authedUser],
          },
        },
      };
    default:
      return state;
  }
};

export default questionsReducer;
