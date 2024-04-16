import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from '../Slice/Slice'

export const Store = configureStore({
  reducer: ticketReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
});
