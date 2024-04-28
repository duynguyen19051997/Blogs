import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { url } from "../utils/link";
import { getNumberOfPage } from "../utils/pagination";

const initialState = {
  blogs: [],
  pagination: {
    currentPage: 1,
    numberOfPage: 0,
    limit: 10,
  },
  blog: {},
  search: "",
  sortBy: "createdAt",
  orderBy: "asc",
  isLoadingBlogs: false,
  isLoadingPagination: false,
  isLoadingBlog: false,
};

export const getTotalBlogs = createAsyncThunk(
  "blog/getTotalBlogs",
  async ({ categoryId, search, sortBy, orderBy }, thunkAPI) => {
    try {
      let totalUrl = "";
      if (categoryId !== undefined) {
        totalUrl = `${url}/categories/${categoryId}/blogs`;
      } else {
        totalUrl = `${url}blogs`;
      }

      const totalBlogUrl = new URL(totalUrl);
      totalBlogUrl.searchParams.append("search", search);
      totalBlogUrl.searchParams.append("sortBy", sortBy);
      totalBlogUrl.searchParams.append("order", orderBy);

      const response = await fetch(totalUrl, {
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

export const getBlogs = createAsyncThunk(
  "blog/getBlogs",
  async (
    { categoryId, search, currentPage, limit, sortBy, orderBy },
    thunkAPI
  ) => {
    try {
      let pageUrl = "";
      if (categoryId !== undefined) {
        pageUrl = `${url}/categories/${categoryId}/blogs`;
      } else {
        pageUrl = `${url}blogs`;
      }
      const paginationUrl = new URL(pageUrl);
      paginationUrl.searchParams.append("search", search);
      paginationUrl.searchParams.append("sortBy", sortBy);
      paginationUrl.searchParams.append("order", orderBy);
      paginationUrl.searchParams.append("page", currentPage);
      paginationUrl.searchParams.append("limit", limit);

      const response = await fetch(`${paginationUrl}`, {
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

export const addBlog = createAsyncThunk(
  "blog/addBlog",
  async (newBlog, thunkAPI) => {
    try {
      const response = await fetch(`${url}blogs`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newBlog),
      });

      if (!response.ok) {
        thunkAPI.rejectWithValue("something went wrong");
        return;
      }
      const data = await response.json();
      console.log(data);
      window.location.reload();
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTotalBlogs.pending, (state) => {
        state.isLoadingPagination = true;
      })
      .addCase(getTotalBlogs.fulfilled, (state, action) => {
        state.isLoadingPagination = false;
        let total = 0;
        if (action.payload) {
          total = action.payload.length;
        }
        const numberOfPage = getNumberOfPage(total, state.pagination.limit);
        state.pagination = {
          ...state.pagination,
          numberOfPage: numberOfPage,
          currentPage: 1,
        };
      })
      .addCase(getTotalBlogs.rejected, (state, action) => {
        state.isLoadingPagination = false;
        console.log(action.payload);
      })
      .addCase(getBlogs.pending, (state) => {
        state.isLoadingBlogs = true;
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isLoadingBlogs = false;
        state.blogs = action.payload;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.isLoadingBlog = false;
        console.log(action.payload);
      });
  },
  reducers: {
    setPagination: (state, action) => {
      const { currentPage, numberOfPage, limit } = action.payload;
      state.pagination.currentPage = currentPage;
      state.pagination.numberOfPage = numberOfPage;
      state.pagination.limit = limit;
    },
    setSorting: (state, action) => {
      state.orderBy = action.payload.orderBy;
      state.sortBy = action.payload.sortBy;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    getBlogById: (state, action) => {
      state.isLoadingBlog = true;
      state.blog = state.blogs.find((x) => x.id === action.payload);
      state.isLoadingBlog = false;
    },
  },
});

export const { setPagination, setSorting, setSearch, getBlogById } =
  blogSlice.actions;

export default blogSlice.reducer;
