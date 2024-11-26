import { createSlice } from '@reduxjs/toolkit';
import { Cart } from '@/app/utils/type';
 

// Define the initial state using that type
const initialState: Cart[] = []

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    //add to cart functionality
    addToCart(state,action){
      const uuid= Math.floor(1000+Math.random()*9000);
      const newObj= {...action.payload,uuid};
      state.push(newObj);
    },
    //delete from cart
    delItem(state,{payload}){
      return state.filter((val) => val.uuid !== payload)
    },
    //Addition of item
    addCart(state , action) {

      const obj = state.find((val) => 
       val.id == action.payload.id && 
       val.color == action.payload.color &&
       val.size == action.payload.size);

       if(obj){
        ++obj.Quantity;
        const newState = state.filter((val) => val.id !== obj?.id)
        state = [...newState, obj]
        return;
       }
    },
    //subtract of item
    subtractCart(state , action) {
      const obj = state.find((val) => 
        val.id == action.payload.id && 
        val.color == action.payload.color &&
        val.size == action.payload.size);
        if( obj !== undefined){
          if(obj.Quantity <=1 ){
            return state.filter((val) => val.uuid !== obj?.uuid)
          }
          --obj.Quantity;
          const newState = state.filter((val) => val.uuid == obj?.uuid)
          state = [...newState, obj]
          return;
        }
    }

    
  },
})

export const {addToCart , delItem , addCart , subtractCart} = cartSlice.actions
 
export default cartSlice.reducer
