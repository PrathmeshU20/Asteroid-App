import { configureStore } from '@reduxjs/toolkit';
import asteroidReducer from './AsteroidSlice';

export const store = configureStore({
  reducer: {
    asteroid: asteroidReducer
  }
});