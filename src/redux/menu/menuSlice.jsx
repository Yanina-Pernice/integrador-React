import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    isMenuOpen: false,
}

const menuSlice = createSlice ({
    name: 'menu',
    initialState: INITIAL_STATE,
    reducers: {
        
        //TOGGLE MENU
        toggleMenu: (state) => {
            return {
                ...state,                            
                isMenuOpen: !state.isMenuOpen
            }
            
        }        
    }
})

export const {
    toggleMenu
} = menuSlice.actions

export default menuSlice.reducer;