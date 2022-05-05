import { configureStore } from "@reduxjs/toolkit";
import color from "./slices/color";
import count from "./slices/count";

export default configureStore({
  reducer: {
    color,
    count,
  },
          middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware1, middleware2, middleware3),
});
