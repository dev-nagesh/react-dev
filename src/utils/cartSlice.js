import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers: {
        addItem: (state,action)=> {
            // Vanilla(Older) Redux => DO NOT MUTATE THE STATE, returning was mandatory
            // const newState = {...state};
            // newState.items.push(action.payload);
            // return newState; 

            //Redux toolkit (New)
            //We have to mutate the state or return a new state
            // New Redux still uses the old approach in the backed with the help of immerJs Libray.
            // ImmerJs library find the difference between the original state, mutated  state and give the immutable state which is a new copy of the state.
            state.items.push(action.payload);
        },
        removeItem: (state,action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            /* state = []
                We can not chane the reference of state. We can mutate the state
                state inside reducer function is always a local variable. Means changing the reference of local variable/state does not change the original or actual state.
                Ex; Let say the value of the original state before invoking reducer is ['pizza']
                Now if we empty the state inside clearCart reducer will only modifies the reference of local state, not the original state
                state ={items:['pizza']}
                clearCart: (state) => {
                    console.log(state); //{items:['pizza']}
                    sate =[]; 
                    console.log(state) // []
                }
            */
        //    console.log(state);
        //    console.log(current(state));
        //    state =[];
        //    console.log(state);
            state.items.length = 0;
            // RTK - We have to mutate the state or return the new state
            // return {items:[]} // instead of state.items.length = 0;
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;