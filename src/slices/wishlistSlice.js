import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[], // wishlist may have more than pne item
    reducers:{
        // action
        // functon logic to add items into wishlist array
        addToWishlist :(state, action)=>{
            state.push(action.payload)
        },

        // to remove the item from the wishlist
        removeFromWishlist :(state , action)=>{
          return state.filter(item=>item.id!=action.payload)
        }

    }
})
export const {addToWishlist , removeFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer