import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import blogReducer from "./slices/blogSlice";

export const store = configureStore({
  reducer: { category: categoryReducer, blog: blogReducer },
});
