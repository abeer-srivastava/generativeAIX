import navigationSlice from "../state/navigationSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    navigation: navigationSlice,
  },
});

export default store;