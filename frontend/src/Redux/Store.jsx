import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import cartReducer from "./cartSlice";  // Import cartSlice

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,  // Add cartReducer
  },
});
