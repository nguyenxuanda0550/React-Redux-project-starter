const customLoggerMiddleware = (storeAPI) => (dispatchNext) => (action) => {
  console.groupCollapsed(`Action Type: ${action.type}`);
  
  // Dispatch the action and save the returned results
  const result = dispatchNext(action);
  
  console.groupEnd();
  
  // Returns results from next middleware or reducer
  return result;
};

export default customLoggerMiddleware;

