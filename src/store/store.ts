import { configureStore, ThunkAction ,Action } from "@reduxjs/toolkit";
import {loginSlice} from "./loginSlice";
import {alertsSlice} from "./alertsSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { loginApi } from '../api/login';


 const store = configureStore({
  reducer: {
    user:loginSlice.reducer,
    alerts: alertsSlice.reducer,
    [loginApi.reducerPath]: loginApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(loginApi.middleware),
devTools:
//   // process.env.NODE_ENV !== "production"
  true
  ? {
    actionCreators: {
      ...alertsSlice.actions,
      ...loginSlice.actions
    },
  }
: false,

});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;


export default store;
