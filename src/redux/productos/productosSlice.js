import { createSlice } from "@reduxjs/toolkit";
import { TotalProducts, products } from "../../data/Products";

const INITIAL_STATE = {
    productos: products,
    totalProductos: TotalProducts,

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