import React from "react";
import { createSlice } from "@reduxjs/toolkit"



const userLogin = createSlice({

    name: "userLogin",
    initialState: {
        name: ""
    },

    reducers: {
        login(state, { payload }) {
            state.name = payload
        }
    }

})

export default userLogin.reducer
export const { login } = userLogin.actions 
