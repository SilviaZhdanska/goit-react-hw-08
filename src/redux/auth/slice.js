import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout } from "./operations"; // Переконайся, що цей рядок правильний

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Тут можуть бути твої редюсери
    setUser(state, action) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});

// Експортуємо редюсер
export const authReducer = authSlice.reducer;
export const { setUser, clearUser } = authSlice.actions; // Якщо потрібні дії
