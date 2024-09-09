import thunkMiddleware from 'redux-thunk';
import customLoggerMiddleware from './logger';
import { applyMiddleware } from 'redux';

// Create middleware stack
const middlewareStack = [thunkMiddleware, customLoggerMiddleware];

// Apply middleware to Redux store
const composedMiddleware = applyMiddleware(...middlewareStack);

export default composedMiddleware;

