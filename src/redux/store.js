import cartSlice from "../slices/cartSlice";
import wishlistSlice from "../slices/wishlistSlice";
const { configureStore } = require("@reduxjs/toolkit");



const store = configureStore({
    reducer:{
        wishlistReducer:wishlistSlice,
        cartReducer:cartSlice

    }
})

export default store