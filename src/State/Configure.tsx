import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Counter";
import { productApi } from "../services/Products";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
