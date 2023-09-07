import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/Products";

const INITIAL_STATE = {
    productos: products,

}

export const productosSlice = createSlice({
    name: "productos",
    initialState: INITIAL_STATE,
    reducers: {

        getProducts: state => {
            return state
        }

    }
})

export const { getProducts } = productosSlice.actions

export default productosSlice.reducer