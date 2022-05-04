import { configureStore } from "@reduxjs/toolkit";
import color from "./slices/color";
import count from "./slices/count";

export default configureStore({
  reducer: {
    color,
    count,
  },
});
