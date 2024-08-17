// const logger = (store) => (next) => (action) => {
//   console.group(action.type);
//   const returnValue = next(action);
//   console.groupEnd();
//   return returnValue;
// };

// export default logger;

const customLoggerMiddleware = (storeAPI) => (dispatchNext) => (action) => {
  console.groupCollapsed(`Action Type: ${action.type}`);
  
  // Dispatch hành động và lưu kết quả trả về
  const result = dispatchNext(action);
  
  console.groupEnd();
  
  // Trả về kết quả từ next middleware hoặc reducer
  return result;
};

export default customLoggerMiddleware;

