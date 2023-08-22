import Layout from "./componentes/Layaout/Layout";
import Navbar from './componentes/Navbar/Navbar'

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar/>
        
        <Layout>

        </Layout>

      </BrowserRouter>
  
    </>
  );
}

export default App;
