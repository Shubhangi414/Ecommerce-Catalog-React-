import { configureStore } from "@reduxjs/toolkit";
import { handleCart} from "./reducers/handleCart";
import productsReducer from "./reducers/productReducer";



export const store = configureStore({
    reducer: {
        cart: handleCart,
        products:productsReducer
    },
  
});