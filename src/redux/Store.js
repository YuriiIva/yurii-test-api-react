import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./Slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export { store };
