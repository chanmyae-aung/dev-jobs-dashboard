import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

const initialState = {
  dark: false,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    darkMode: (state) => {
        // state.dark = !state.dark
        // Cookies.set("dark", state.dark = false)
    },
    lightMode: () => {
      // Cookies.remove("dark")  
    }
}})
export const {darkMode, lightMode} = themeSlice.actions

export default themeSlice.reducer