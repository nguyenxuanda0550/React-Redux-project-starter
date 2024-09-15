import { ADD_ANSWER_TO_QUESTION, CREATE_NEW_QUESTION, LOAD_QUESTIONS } from '../actions/polls';

const initialState = {};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_QUESTIONS:
      // Update status with questions received
      return {
        ...state,
        ...action.questions,
      };
    case CREATE_NEW_QUESTION:
      // Add new question to status
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case ADD_ANSWER_TO_QUESTION:
      // Updated answer to specific question
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

export default questionsReducer;
