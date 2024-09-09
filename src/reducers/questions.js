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
