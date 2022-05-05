import { configureStore } from "@reduxjs/toolkit";

// Reducers
import color from "./slices/color";
import count from "./slices/count";

// Middleware
import middleware1 from "./middleware/middleware-1";
import middleware2 from "./middleware/middleware-2";

export default configureStore({
  reducer: {
    color,
    count,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware1, middleware2),
});
