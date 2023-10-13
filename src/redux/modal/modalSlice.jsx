import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    isOpen: false, 
    message: ''

}

const modalSlice = createSlice({
    name: "modal",
    initialState: INITIAL_STATE,
    reducers: {
        toggleModal: (state) => {
            return {
                ...state,
                isOpen: !state.isOpen,  
            }
          
        },

        setMessage: (state, action) => {
            return{
                ...state,
                message: action.payload
            }
        },
    }
});

export const { toggleModal, setMessage  } = modalSlice.actions;
export default modalSlice.reducer; 