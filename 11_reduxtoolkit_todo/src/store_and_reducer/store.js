import { configureStore } from '@reduxjs/toolkit';
import myReducer from '../Reducer/storeSlice';
export const store  = configureStore({
    reducer : myReducer
})
