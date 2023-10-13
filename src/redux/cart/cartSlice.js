import { createSlice } from "@reduxjs/toolkit";
import { COSTO_ENVIO } from "../../utils/constantes";
import { agregarItemAlCarrito, removerItemDeCarrito, resetCostoEnvio } from "./cart-utils";

const INITIAL_STATE = {
    itemsCarrito: [],
    costoEnvio: 0,
    hidden: true,
}

const cartSlice = createSlice ({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        //AGREGAR AL CARRITO
        agregarProducto: (state, action) => {

            return {
                ...state,
                itemsCarrito: agregarItemAlCarrito(state.itemsCarrito, action.payload),
                costoEnvio: COSTO_ENVIO
            }
        },

        //REMOVER DEL CARRITO
        removerProducto: (state, action) => {
            return {
                ...state,
                itemsCarrito: removerItemDeCarrito(state.itemsCarrito, action.payload),
                costoEnvio: resetCostoEnvio(state.itemsCarrito, COSTO_ENVIO),
            }
        },

        //REMOVER TODO
        cleanCart: (state) => {
            return {
                ...state,
                itemsCarrito: [],
                costoEnvio: 0
            }
        },

        //TOGGLE CARRITO
        toggleHiddenCart: (state) => {
            return {
                ...state,
                            
                hidden: !state.hidden
            }

            
        }
        
    }
})


export const {
    agregarProducto,
    removerProducto,
    cleanCart,
    toggleHiddenCart
} = cartSlice.actions

export default cartSlice.reducer;