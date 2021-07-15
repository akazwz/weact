import {createSlice} from "@reduxjs/toolkit";

let type = localStorage.getItem('type')
if (!type) {
    type = 'light'
}

export const themeType = createSlice({
    name: 'type',
    initialState: {
        value: type
    },
    reducers: {
        setLight: state => {
            state.value = 'light'
        },
        setDark: state => {
            state.value = 'dark'
        },
    }
})

export const {setLight, setDark} = themeType.actions

export const typeValue = state => state.type.value

export default themeType.reducer
