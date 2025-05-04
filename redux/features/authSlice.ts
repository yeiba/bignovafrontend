"use client";
import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../utils/statePersistence";

interface AuthState {
  isAuthenticated: boolean;
  role: "admin" | "user" | "staff" | "blogger" | null;
}
// Use `loadState` to get the initial state
const preloadedState = loadState();

// Extract the user state or fall back to defaults
const initialState: AuthState = {
  isAuthenticated: preloadedState?.user?.isAuthenticated || false,
  role: preloadedState?.user?.role || null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.isAuthenticated = true;
      state.role = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.role = null;
      localStorage.removeItem("applicationState");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
