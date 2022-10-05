import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./appSlice";
import apiConnection from "./apiConnection";

const store = configureStore({
  reducer: {
    [AppSlice.name]: AppSlice.reducer,
    [apiConnection.reducerPath]: apiConnection.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiConnection.middleware)
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

