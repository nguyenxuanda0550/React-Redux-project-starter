import {ADD_NEW_ANSWER_QUESTION, ADD_NEW_QUESTION, RECEIVE_QUESTIONS } from '../actions/polls';


const questions = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
      };
    case ADD_NEW_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case ADD_NEW_ANSWER_QUESTION:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat(
              action.authUser,
            ),
          },
        },
      };
    default:
      return state;
  }
};

export default questions;
