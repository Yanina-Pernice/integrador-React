import { createContext, useReducer } from "react";

export const MenuContexto = createContext();

export const ContextoProvider = ({children} )=> {

    const initialState = {
        isMenuOpen: false,       

    };

    const contextReducer = (state, action) => {

        switch (action.type) {
            case 'isMenuOpen': 
                return {
                    ...state,
                    isMenuOpen: !state.isMenuOpen,
                }
            default: 
                return state;
        }

    }

    const [state, dispatch] = useReducer (contextReducer, initialState)

    return (
        <MenuContexto.Provider value={{state, dispatch}}>
            {children}
        </MenuContexto.Provider>

    )

}