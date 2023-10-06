import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    usuarioActual: null,
    hiddenMenu: true,
        
}

export const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers: {
        setUsuarioActual: (state, action) => {
            return {
                ...state,
                usuarioActual: action.payload,
            };
        },
        toggleHiddenMenu: (state) => {
            return {
                ...state,
                hiddenMenu: !state.hiddenMenu,
            };
        },

    }

})

export const { setUsuarioActual, toggleHiddenMenu } = userSlice.actions;

export default userSlice.reducer