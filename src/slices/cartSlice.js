import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart',
    initialState:[], // ca
    reducers:{

        // function to add to cart
        addToCart : (state , action )=>{
            state.push(action.payload)
        },

        //funtion to remove items from cart
        removefromcart: (state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }


    }
})

export const {addToCart ,removefromcart} = cartSlice.actions
export default cartSlice.reducer