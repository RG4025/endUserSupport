import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from '../Slice/Slice'

export const Store = configureStore({
  reducer: ticketReducer,
});
