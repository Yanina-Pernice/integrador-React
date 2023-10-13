import { Routes as PagesDomRoutes, Route } from 'react-router-dom';

import Home from '../Pages/Home/Home';
import AboutUs from '../Pages/About us/AboutUs';
import Productos from '../Pages/Productos/Productos';
import Contacto from '../Pages/Contacto/Contacto';
import NotFound from '../Pages/Not Found/NotFound';


function Routes () {
  return (
        <PagesDomRoutes>
            
            <Route path="/" element={<Home />} />

            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/contacto" element={<Contacto />} />
        
            <Route path="*" element={<NotFound/>} />

 
        </PagesDomRoutes>          
    )
}


export default Routes;