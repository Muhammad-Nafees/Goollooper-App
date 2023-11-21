import { configureStore, combineReducers, } from "@reduxjs/toolkit"
import userLogin from "./slices/userLogin"

export const store = configureStore({
    reducer: {
        userLogin: userLogin
    }
})

