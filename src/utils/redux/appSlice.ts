import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface AppState {
    loggedIn: boolean
}
const initialState: AppState = {
    loggedIn: false
}
const AppSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        logIn(state: AppState, action: PayloadAction<AppState>) {
            // A demo since we won't actually be managing such states
            state.loggedIn = true;
        },
        logOut(state: AppState, action: PayloadAction<AppState>) {
            // A demo since we won't actually be managing such states
            state.loggedIn = false;
        }
    }
})
export const { logIn, logOut } = AppSlice.actions;
export default AppSlice;