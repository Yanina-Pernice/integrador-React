import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyles } from './styles/GlobalStyles.js'
import { ContextoProvider } from './componentes/Navbar/Menu Context/MenuContext.jsx'

import {Provider} from "react-redux"
import { persistor, store } from "./redux/store.js";
import {PersistGate} from "redux-persist/integration/react"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ContextoProvider>
          <App />
          <GlobalStyles />
        </ContextoProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
