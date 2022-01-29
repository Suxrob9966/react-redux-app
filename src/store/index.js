// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth'; // exported as default authSlice.reducer in auth.js

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
