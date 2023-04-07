import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shoppingCart/cartSlice";
import cartUISlice from "./shoppingCart/cartUISlice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        cartUI: cartUISlice.reducer,
    },
});

export default store;
