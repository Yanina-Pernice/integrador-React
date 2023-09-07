import { createSlice } from "@reduxjs/toolkit";
import { destacadosDelDia } from "../../utils/destacadosDelDia";

const INITIAL_STATE = {
    recomendados: destacadosDelDia(6)    
}

console.log(INITIAL_STATE)

export const recomendadosSlice = createSlice({
    name: "recomendados",
    initialState: INITIAL_STATE,
    reducers: {
        recomendadosRandom: (state) => {
            return state
        }
    }

})

export const { recomendadosRandom } = recomendadosSlice.actions;

export default recomendadosSlice.reducer