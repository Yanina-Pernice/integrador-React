import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/Categories";

const INITIAL_STATE = {
    categorias: categories,
    categoriaSeleccionada: null
}

export const categoriasSlice = createSlice({
    name: "categories",
    initialState: INITIAL_STATE,
    reducers: {
        
        selectCategory: (state, action) => {
            return {
                ...state,
                categoriaSeleccionada: action.payload !== state.categoriaSeleccionada ? action.payload : null

            }
        },

        categorias: (state) => {
            return state
        }
    }
})

export const {
    categorias,
    selectCategory
} = categoriasSlice.actions;

export default categoriasSlice.reducer