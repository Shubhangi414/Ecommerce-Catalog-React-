import { handleCart } from "./handleCart";
import {combineReducers} from "redux";
import productsReducer from "./productReducer";

export const rootReducers = combineReducers({
    handleCart,
    products:productsReducer
})

