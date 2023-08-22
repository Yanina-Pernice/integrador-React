import React from 'react'
import { LayoutWrapper, ContainerRoutes } from './LayoutStyles'
import Routes from '../../routes/Routes'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <>

      <LayoutWrapper>



        <ContainerRoutes>
          <Routes/>
        </ContainerRoutes>
        
        <Footer/>
        
      </LayoutWrapper>
      
    </>

  )
}

export default Layout
