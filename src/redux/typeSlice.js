import {createSlice} from "@reduxjs/toolkit";

let type = localStorage.getItem('type')
if (!type) {
    type = 'light'
}

export const typeSlice = createSlice({
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

export const {setLight, setDark} = typeSlice.actions

export const typeValue = state => state.type.value

export default typeSlice.reducer
