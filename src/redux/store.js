import {configureStore} from "@reduxjs/toolkit";
import typeReducer from './themeType'

export default configureStore({
    reducer: {
        type: typeReducer,
    },
})
