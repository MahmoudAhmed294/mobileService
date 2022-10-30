import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginResponse } from "../api/types";
import { RootState } from "./store";


const initialState: LoginResponse = {
  name: '',
  avatar: '',
  username: '',
  id: ''
};

export const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state , action:PayloadAction<LoginResponse | any>) => {
      state.id = action.payload[0].id;
      state.name = action.payload[0].name;
      state.username = action.payload[0].username;
      state.avatar = action.payload[0].avatar;
    },
  },
});

export const { setUser } = loginSlice.actions;
export const getUserInfo =(state: RootState) => state.user
export default loginSlice.reducer;
