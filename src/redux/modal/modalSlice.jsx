import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    isOpen: false, //AL AGREGAR ITEM
    isConfirmationModalOpen: false, //PARA VACIAR CARRITO

}

const modalSlice = createSlice({
    name: "modal",
    initialState: INITIAL_STATE,
    reducers: {
        openModal: (state) => {
            state.isOpen = true;
        },
        closeModal: (state) => {
            state.isOpen = false;
        },
        openConfirmationModal: (state) => {
            state.isConfirmationModalOpen = true;
        },
        closeConfirmationModal: (state) => {
            state.isConfirmationModalOpen = false;
        },
    }
});

export const { openModal, closeModal, openConfirmationModal, closeConfirmationModal  } = modalSlice.actions;
export default modalSlice.reducer; 