import { createSlice } from "@reduxjs/toolkit";

import {
  getProducts,
  addProducts,
  editProducts,
  deleteProducts,
} from "./Operations";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.posts = payload;
      })
      .addCase(getProducts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(addProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.posts.push(payload);
      })
      .addCase(addProducts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(editProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.posts.map((post) => (post.id === payload.id ? payload : post));
      })
      .addCase(editProducts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(deleteProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        const indx = state.posts.findIndex((post) => post.id === payload);
        state.posts.splice(indx, 1);
      })
      .addCase(deleteProducts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default productsSlice.reducer;
