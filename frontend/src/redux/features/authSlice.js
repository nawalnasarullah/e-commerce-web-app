import { createSlice } from "@reduxjs/toolkit";

const {actions, reducer} = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: null
    },
    reducers: {
        setUserInfo: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token 
        },
        clearUserInfo: (state, action) => {
        }
    }
});

export const {setUserInfo, clearUserInfo} = actions
export default reducer

