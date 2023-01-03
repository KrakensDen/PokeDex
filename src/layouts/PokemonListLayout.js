import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import AppHead from './AppHead'
import { PokemonPageContainer } from '../components/styled-components/Container/Container.styles'
import SideBar from '../layouts/SideBar/SideBar';

const PokemonListLayout = ({ children, title, description, headTitle }) => {
  return (
    <>
      <AppHead headTitle={headTitle} description={description} />
      <Header title={title} />
      <PokemonPageContainer>
        <SideBar />
        {children}
      </PokemonPageContainer>
      <Footer />
    </>
  )
}

export default PokemonListLayout
