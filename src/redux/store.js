import {configureStore} from "@reduxjs/toolkit";
import typeReducer from '../redux/typeSlice'

export default configureStore({
    reducer: {
        type: typeReducer,
    },
})
