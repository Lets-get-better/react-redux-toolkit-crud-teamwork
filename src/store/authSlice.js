import { createSlice } from "@reduxjs/toolkit";
import { signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/fireBase";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { user: null };

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action) => {
      signInWithEmailAndPassword(
        auth,
        action.payload.email,
        action.payload.password
      );
      state.user = {
        email: action.payload.email,
        password: action.payload.password,
      };
    },
    logOut: (state, action) => {
      signOut(auth);
    },
  },
  extraReducers: {},
});

export const { signIn, logOut } = authSlice.actions;
export default authSlice.reducer;
