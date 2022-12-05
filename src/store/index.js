import { configureStore } from "@reduxjs/toolkit";
import carsAlls from './slices/carsAlls'

export default configureStore({
    reducer: {
        carsAlls
    }
})