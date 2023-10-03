// src/reducers/index.js
import { combineReducers } from 'redux';
import progressReducer from './progressReducer'; // Ganti ini dengan nama reducer yang sesuai
import statusReducer from './statusReducer'; // Ganti ini dengan nama reducer yang sesuai

const rootReducer = combineReducers({
  progress: progressReducer,
  status: statusReducer,
  // ... tambahkan reducer lain jika diperlukan
});

export default rootReducer;
