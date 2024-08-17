// import thunk from 'redux-thunk';
// import logger from './logger';
// import { applyMiddleware } from 'redux';

// export default applyMiddleware(thunk, logger);
import thunkMiddleware from 'redux-thunk';
import customLoggerMiddleware from './logger';
import { applyMiddleware } from 'redux';

// Tạo middleware stack
const middlewareStack = [thunkMiddleware, customLoggerMiddleware];

// Áp dụng middleware vào Redux store
const composedMiddleware = applyMiddleware(...middlewareStack);

export default composedMiddleware;

