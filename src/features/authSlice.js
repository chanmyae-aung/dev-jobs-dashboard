import { createSlice } from "@reduxjs/toolkit"
import Cookies from "js-cookie"

const initialState = {
    token: null,
    currentPage: 1,
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
        },
        nextPage: (state) => {
            state.currentPage += 1
        },
        prevPage: state => {
            state.currentPage -= 1
        },
        firstPage: state => {
            state.currentPage = 1
        },
        lastPage: (state, {payload}) =>  {
            state.currentPage = payload.currentPage
        }
    }
})

export const {loginAdmin, logoutAdmin, nextPage, prevPage, firstPage, lastPage} = authSlice.actions
export default authSlice.reducer