import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  username: string,
  fullname: string, 
  email: string,
  password: string
}

interface UserState {
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: UserState = {
  isAuthenticated: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) { 
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

// Export actions and reducer
export const { logout, login } = userSlice.actions;
export default userSlice.reducer;