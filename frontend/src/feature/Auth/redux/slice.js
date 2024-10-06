import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Endpoints from "../../../network/endpoints";
import Cookies from "js-cookie";

export const signup = createAsyncThunk(
  Endpoints.signup,
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(Endpoints.signup, userData);
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data.message || "Signup failed");
      } else if (error.request) {
        return rejectWithValue("No response from server");
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(Endpoints.login, credentials);
      Cookies.set("token", response.data.data.token, { expires: 7 });
      return response.data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.response.data.message || "Login failed");
      } else if (error.request) {
        return rejectWithValue("No response from server");
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "init",
    isLoggedIn: Boolean(Cookies.get("token")),
    userDetails: JSON.parse(localStorage.getItem("user")) ?? {},
    error: null,
  },
  reducers: {
    setIsLoggedIn: (state) => {
      state.isLoggedIn = Boolean(Cookies.get("token"));
      state.userDetails = JSON.parse(localStorage.getItem("user")) ?? {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { setIsLoggedIn } = authSlice.actions;

export default authSlice;
