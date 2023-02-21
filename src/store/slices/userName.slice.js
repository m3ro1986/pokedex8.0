import { createSlice } from '@reduxjs/toolkit';

export const userNameSlice = createSlice({
    name: 'userName',
    initialState: '',
    reducers: {
        getUserName: ( state, action ) => {
            const userName = action.payload;
            return userName;
        }
    }
})

export const { getUserName } = userNameSlice.actions;

export default userNameSlice.reducer;