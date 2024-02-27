import { createSlice } from '@reduxjs/toolkit';
import productData from '../data';

const initialState = {
    items: [],
    cartShow: false,
    cartTotal: 0,
    itemsLength: 0
};

function addCartLogic(state, action) {
    const isPresentInCart = state.items.find((product)=> {return product.id === action.payload.id});
    if (isPresentInCart) {
      addQuantityLogic(state, action);
    } else {
      const getProduct = productData.find((product)=> {return product.id === action.payload.id})
      const product = {...getProduct, qty: 1, total: getProduct.price};
      state.items.push(product);
      state.cartShow = true;
      state.cartTotal = state.cartTotal + getProduct.price;
      state.itemsLength = state.itemsLength + 1;
    }
}

function removeProductLogic(state, action) {
      state.items = state.items.filter((item)=> {
        if (item.id === action.payload.id) {
          state.cartTotal = state.cartTotal - item.price;
        }
        return item.id !== action.payload.id;
      })
}

function addQuantityLogic(state, action) {
    let cartTotal = 0;
    state.items.map((item)=> { 
      if (item.id === action.paylod.id) {
        item.qty = item.qty + 1;
        item.total = item.price * item.qty;
      }
      cartTotal = cartTotal + item.total; 
      return item;
    });
    state.cartShow = action.payload.cartShow;
  }

  function removeQuantityLogic(state, action) {
    let cartTotal = 0;
    state.items.map((item)=> { 
      if (item.id === state.payload.id) {
        item.qty = item.qty > 1 ? item.qty - 1 : 1;
        item.total = item.price * item.qty;
      }
      cartTotal = cartTotal + item.total; 
      return item;
    });  
    state.cartShow = action.payload.cartShow;
  }

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
      addCart(state, action) {
        addCartLogic(state, action);
      },
      addQuantity(state, action) {
        addQuantityLogic(state, action);
      },
      removeQuantity(state, action) {
       removeQuantityLogic(state, action);
      },
      removeProduct(state, action) {
        removeProductLogic(state, action);
      },
      miniCartStatus(state, action) {
        state.cartShow = action.payload;
      }
    },
  });

export const { addCart, addQuantity, removeQuantity, removeProduct, miniCartStatus } = basketSlice.actions;

export default basketSlice.reducer;
