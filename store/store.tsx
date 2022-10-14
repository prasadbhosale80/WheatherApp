import { configureStore } from "@reduxjs/toolkit";
import wheatherInfoSlice from "./wheatherInfoSlice";

const store = configureStore({
    reducer:{
        wheatherInfoSlice,
    }
});

export default store;