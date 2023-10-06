import { createSlice } from "@reduxjs/toolkit";
import { seleccionarProductosRandom } from "./recomendadosUtils";

const INITIAL_STATE = {
    recomendados: seleccionarProductosRandom(6),
        
}

export const recomendadosSlice = createSlice({
    name: "recomendados",
    initialState: INITIAL_STATE,
    reducers: {
        productosRecomendados: (state) => {
            return state
            
        }
    }

})

export const { productosRecomendados } = recomendadosSlice.actions;

export default recomendadosSlice.reducer