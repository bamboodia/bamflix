import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './moviesSlice';
import optionsReducer from './optionsSlice';

export const store = configureStore({
    reducer: {
        options: optionsReducer,
        movies: moviesReducer,
    },
});