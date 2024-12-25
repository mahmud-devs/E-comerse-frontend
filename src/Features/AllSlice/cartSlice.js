import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("addToCart")
    ? JSON.parse(localStorage.getItem("addToCart"))
    : [],
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
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removecart, increment, decrement } =
  cartSlice.actions;

export default cartSlice.reducer;
