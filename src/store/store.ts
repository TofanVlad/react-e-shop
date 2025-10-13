import menuReducer from './menu.slice';
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        menu: menuReducer
    }
})