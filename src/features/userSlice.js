import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentPage: 1,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
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

export const { nextPage, prevPage, firstPage, lastPage} = userSlice.actions
export default userSlice.reducer