import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDetails: null,
    token: null,
    // You might want to store user information here
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            const { data, ...userDetails } = action.payload;

            state.token = data?.token;

            state.userDetails = { userDetails, ...data?.user };
        },
        logoutSuccess: (state) => {
            state.token = null;
            state.userDetails = null;
        },
    },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;
