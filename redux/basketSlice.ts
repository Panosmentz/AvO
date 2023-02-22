//a slice is a "part" of a component
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

export interface BasketState {
  items: Product[]
}

const initialState: BasketState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
   addToBasket: (state: BasketState, action: PayloadAction<Product>) => {
    //user is going to send an action with a Payload- addToBasket adds a <Product> in the state
    state.items = [...state.items, action.payload]
    //keep the previous item(...state) and add whatever's in action.payload
   },
   removeFromBasket: (state:BasketState, action:PayloadAction<{id: string}> ) => {
    //we get the product's id in the payload 
    const index = state.items.findIndex((item: Product) => item._id === action.payload.id)
    //we go through the state.items array to find the index that matches the _id with the one that the user sent
    let newBasket = [...state.items];
    //we preserve the state under newBasket
    if (index>=0){
        //if index was found, remove it from newBasket with splice
        newBasket.splice(index,1);
    }else {
        console.log(`Can't remove product (id: ${action.payload.id}) as it's not in basket!`)
    }
    state.items = newBasket
   }
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

//Selectors -> retrieving items in state to use - it's like "watch"
export const selectBasketItems = (state:RootState) => state.basket.items

export const selectBasketItemsWithId = (state:RootState, id: string) =>{
  //accepts state and id - filter through all the items and for every single item of type Product
  //return only the ones where the id matches
  state.basket.items.filter((item: Product) => item._id === id);
}
export const selectBasketItemsTotal = (state:RootState) => 
  state.basket.items.reduce((total: number, item:Product ) => (total +=item.price), 0)
  //reduce accumulates the whole price of all the items.

export default basketSlice.reducer