import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData, saveItem, editItem, deleteItem } from "../services/Api";
const END_POINT = "posts";

const getProducts = createAsyncThunk(
  "products/getProductsStatus",
  async (_, thunkAPI) => {
    try {
      const data = await getData(END_POINT);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something wrong :(");
    }
  }
);

const addProducts = createAsyncThunk(
  "products/addProductsStatus",
  async (newProducts, thunkAPI) => {
    try {
      const data = await saveItem(END_POINT, newProducts);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something wrong :(");
    }
  }
);

const editProducts = createAsyncThunk(
  "products/editProductsStatus",
  async (editProducts, thunkAPI) => {
    try {
      const data = await editItem(END_POINT, editProducts);
      console.log(`data`, data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something wrong :(");
    }
  }
);

const deleteProducts = createAsyncThunk(
  "products/deleteProductsStatus",
  async (deleteId, thunkAPI) => {
    try {
      await deleteItem(END_POINT, deleteId);
      return deleteId;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something wrong :(");
    }
  }
);

export { getProducts, addProducts, editProducts, deleteProducts };
