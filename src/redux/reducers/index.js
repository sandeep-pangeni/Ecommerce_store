import { combineReducers } from "redux";
import { productsReducer } from "./productsReducproductsReducer"

const reducers = combineReducers({
    allProducts: productsReducer,
});
export default reducers;