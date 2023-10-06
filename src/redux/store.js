import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit" 
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/lib/persistStore";
import storage from "redux-persist/lib/storage";

import categoriasReducer from "./categorias/categoriasSlice"
import productosReducer from "./productos/productosSlice"
import recomendadosReducer from "./recomendados/recomendadosSlice"
import cartReducer from "./cart/cartSlice"
import modalReducer from "./modal/modalSlice"
import userReducer from "./user/userSlice"


const reducers = combineReducers({
    categorias: categoriasReducer,
    productos: productosReducer,
    recomendados: recomendadosReducer,
    cart: cartReducer,   
    modal: modalReducer,
    user: userReducer,
});



// configuracion de reducers. todos llegan al store, los que esten en la WL llegaran al LS
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart", "user"]
}

// data que quiero persista en el LS
const persistedReducer = persistReducer(persistConfig, reducers);

//al configure store le paso lo que quiero que guarde
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

export const persistor = persistStore(store)

