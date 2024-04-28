import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../utils/link";

const initialState = {
  categories: [],
  currentCategory: {},
  isLoading: true,
};

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async (_, thunkAPI) => {
    try {
      const categoryUrl = new URL(`${url}categories`);
      categoryUrl.searchParams.append("sortBy", "name");
      categoryUrl.searchParams.append("orderBy", "asc");
      const response = await fetch(categoryUrl, {
        method: "GET",
        headers: { "content-type": "application/json" },
      });

      if (!response.ok) {
        thunkAPI.rejectWithValue("something went wrong");
        return;
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
      });
  },
  reducers: {
    setCurrentCategory: (state, action) => {
      const id = action.payload;
      state.currentCategory = state.categories.find((x) => x.id === id);
    },
  },
});

export const { setCurrentCategory } = categorySlice.actions;

export default categorySlice.reducer;
