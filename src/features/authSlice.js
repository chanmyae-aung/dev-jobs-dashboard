import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"

const initialState = {
    token: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginAdmin: (state, {payload}) => {
            state.token = payload.token
            Cookies.set("token", state.token)
        },
        logoutAdmin: (state) => {
            Cookies.remove("token")
        }
    }
})

export const {loginAdmin, logoutAdmin} = authSlice.actions
export default authSlice.reducer