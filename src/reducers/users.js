import { ADD_USER_ANSWER, ADD_USER_QUESTION, RECEIVE_USERS, } from '../actions/users';


const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_USER_QUESTION:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: [...state[action.author].questions, action.id],
        },
      };
    case ADD_USER_ANSWER:
      return {
        ...state,
        [action.authUser]: {
          ...state[action.authUser],
          answers: {
            ...state[action.authUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
    default:
      return state;
  }
};

export default users;


//----------------2222222222222222222222222222

// import { ADD_USER_ANSWER, ADD_USER_QUESTION, RECEIVE_USERS } from '../actions/users';

// const initialState = {};

// const users = (state = initialState, action) => {
//   switch (action.type) {
//     case RECEIVE_USERS:
//       // Kết hợp dữ liệu người dùng mới vào trạng thái hiện tại
//       return {
//         ...state,
//         ...action.payload, // Sử dụng payload để rõ ràng hơn
//       };
//     case ADD_USER_QUESTION:
//       // Cập nhật danh sách câu hỏi của người dùng
//       return {
//         ...state,
//         [action.authorId]: {
//           ...state[action.authorId],
//           questions: [...state[action.authorId].questions, action.questionId],
//         },
//       };
//     case ADD_USER_ANSWER:
//       // Cập nhật câu trả lời của người dùng
//       return {
//         ...state,
//         [action.userId]: {
//           ...state[action.userId],
//           answers: {
//             ...state[action.userId].answers,
//             [action.questionId]: action.answerOption,
//           },
//         },
//       };
//     default:
//       // Trả về trạng thái hiện tại nếu không có hành động nào khớp
//       return state;
//   }
// };

// export default users;
