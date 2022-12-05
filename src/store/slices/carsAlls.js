import {createSlice} from '@reduxjs/toolkit';

export const carsAllSlice = createSlice({
    name: 'carsAlls',
    initialState: '',
    reducers: {
        setCarsAlls: (state, action) => action.payload
    }
})
export const {setCarsAlls} = carsAllSlice.actions
export default carsAllSlice.reducer