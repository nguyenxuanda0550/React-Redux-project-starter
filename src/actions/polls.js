import { saveQuestion, saveQuestionAnswer } from '../data/api';
import { addUserAnswer, addUserQuestion } from './users';

export const CREATE_NEW_QUESTION = 'CREATE_NEW_QUESTION';
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION';
export const LOAD_QUESTIONS = 'LOAD_QUESTIONS';

const addNewQuestion = (question) => {
  return {
    type: CREATE_NEW_QUESTION,
    question,
  };
};

const addNewAnswerQuestion = (authUser, qid, answer) => {
  return {
    type: ADD_ANSWER_TO_QUESTION,
    authUser,
    qid,
    answer,
  };
};

const receiveQuestions = (questions) => {
  return {
    type: LOAD_QUESTIONS,
    questions,
  };
};

const handleCreateQuestion = (firstOption, secondOption) => {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    const question = {
      optionOneText: firstOption,
      optionTwoText: secondOption,
      author: authUser,
    };
    console.log('question', question)
    try {
      const questionResponse = await saveQuestion(question);
      dispatch(addNewQuestion(questionResponse));
      dispatch(addUserQuestion(questionResponse));
    } catch(error) {
      console.error('Error adding question:', error);
    }   
  };
};

const handleCreateAnswer = (questionId, answer) => {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    const answerObject = {
      authedUser: authUser.id,
      qid: questionId,
      answer,
    };
    const isAdded = await saveQuestionAnswer(answerObject);
    if (isAdded) {
      dispatch(addNewAnswerQuestion(authUser.id, questionId, answer));
      dispatch(addUserAnswer(authUser.id, questionId, answer));
    }
  };
};

export { handleCreateQuestion, handleCreateAnswer, receiveQuestions };
