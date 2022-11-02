import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginResponse } from "../api/types";
import { RootState } from "./store";


const initialState: LoginResponse = {
  name: '',
  avatar: '',
  id: null 
};

export const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state , action:PayloadAction<LoginResponse | any>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.avatar = action.payload.avatar;
    },
  },
});

export const { setUser } = loginSlice.actions;
export const getUserInfo =(state: RootState) => state.user
export default loginSlice.reducer;
