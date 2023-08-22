import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyles } from './styles/GlobalStyles.js'
import { ContextoProvider } from './componentes/Navbar/Menu Context/MenuContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ContextoProvider>
      <App />
      <GlobalStyles/>
    </ContextoProvider>

  </React.StrictMode>,
)
