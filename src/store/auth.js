import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticaded: false
};

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticaded = true;
        },
        logout(state) {
            state.isAuthenticaded = false;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;