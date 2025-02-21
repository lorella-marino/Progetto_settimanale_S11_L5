import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "../reducers/musicReducer";

const store = configureStore({
  reducer: {
    music: musicReducer,
  },
});

export default store;
