// import {} from "react-redux"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import register from "../../service/apis/Register"


export const FetchData = createAsyncThunk("RegisterApi", async () => {

    try {
        const response = await register()
        // console.log(response.data)
    } catch (error) {
        console.log(error)
    }

})


const register_api = createSlice({
    name: "register",
    initialState: {
        data: null,
        error: null,
        loading: false
    },


})
