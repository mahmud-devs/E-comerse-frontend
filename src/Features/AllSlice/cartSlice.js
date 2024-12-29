import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("addToCart")
    ? JSON.parse(localStorage.getItem("addToCart"))
    : [],
  cartTotalItem: 0,
  caerTotalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findItem = state.value.findIndex((item) => {
        return item._id == action.payload._id;
      });

      if (findItem >= 0) {
        state.value[findItem].cartQuantity += 1;
        localStorage.setItem("addToCart", JSON.stringify(state.value));
      } else {
        state.value.push({ ...action.payload, cartQuantity: 1 });
        localStorage.setItem("addToCart", JSON.stringify(state.value));
      }
    },
    removecart: (state, action) => {
      const filterItem = state.value.filter((item) => {
        return item._id !== action.payload._id;
      });
      state.value = filterItem;
      localStorage.setItem("addToCart", JSON.stringify(state.value));
    },
    increment: (state, action) => {
      const findindex = state.value.findIndex((item) => {
        return item._id === action.payload._id;
      });
      if (findindex >= 0) {
        state.value[findindex].cartQuantity += 1;
        localStorage.setItem("addToCart", JSON.stringify(state.value));
      }
    },
    decrement: (state, action) => {
      const findindex = state.value.findIndex((item) => {
        return item._id === action.payload._id;
      });
      if (state.value[findindex].cartQuantity > 1) {
        state.value[findindex].cartQuantity -= 1;
        localStorage.setItem("addToCart", JSON.stringify(state.value));
      }
    },
    getTotalItem: (state, action) => {
      const cartAllItemReduce = state.value.reduce(
        (cartInfo, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const cartTotalPrice = price * cartQuantity;
          cartInfo.totalItem += cartQuantity;
          cartInfo.totalamount += cartTotalPrice;
          return cartInfo;
        },
        {
          totalItem: 0,
          totalamount: 0,
        },
      );
      state.cartTotalItem = cartAllItemReduce.totalItem;
      state.caerTotalPrice = cartAllItemReduce.totalamount;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removecart, increment, decrement, getTotalItem } =
  cartSlice.actions;

export default cartSlice.reducer;
