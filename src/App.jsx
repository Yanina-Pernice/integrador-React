import Navbar from "./componentes/Navbar/Navbar"
import Layout from "./componentes/Layaout/Layout"
import Hero from "./componentes/Hero/Hero"
import Beneficios from "./componentes/Beneficios/Beneficios"
import Categorias from "./componentes/Categorias/Categorias"
import CardsProductosDestacados from "./componentes/Productos/CardsProductosDestacados" 
import Footer from "./componentes/Footer/Footer"

function App() {
  return (
    <>
      <Navbar/>
      <Layout>
        <Hero/>
        <Beneficios/>
        <Categorias/>
        <CardsProductosDestacados/>
      </Layout>
      <Footer/>
    </>   
    
  )
}

export default App
