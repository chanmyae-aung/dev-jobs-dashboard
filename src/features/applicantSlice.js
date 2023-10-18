import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentPage: 1,
}

export const applicantSlice = createSlice({
    name: "applicant",
    initialState,
    reducers: {
        next: (state) => {
            state.currentPage += 1
        },
        prev: state => {
            state.currentPage -= 1
        },
        first: state => {
            state.currentPage = 1
        },
        last: (state, {payload}) =>  {
            state.currentPage = payload.currentPage
        }
    }
})

export const { next, prev, first, last} = applicantSlice.actions
export default applicantSlice.reducer