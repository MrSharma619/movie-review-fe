import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from './slices/tokenSlice';
import userReducer from "./slices/userSlice";

export default configureStore({
    reducer: {
        token: tokenReducer,
        userDetails: userReducer,
    },
});
