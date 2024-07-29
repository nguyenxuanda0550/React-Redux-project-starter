import { getInitialData } from '../data/api';
import { receiveUsers } from './users';
import { receiveQuestions } from './polls';

const loadInitialData = () => {
  return async (dispatch) => {
    try{
      const { users, questions } = await getInitialData();
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    } catch(error) {
      console.error('Error loading initial data:', error);
    }
    
  };
};

export { loadInitialData };
