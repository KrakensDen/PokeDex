import React from "react";
import Header from "./Navbar";
import Footer from "./Footer/Footer";
import AppHead from "./AppHead";
import { PokemonPageContainer } from "../components/styled/containers/Container.styles";
import SideBar from "../layouts/SideBar/SideBar";

const PokemonListLayout = ({ children, title, description }) => {
  return (
    <>
      <AppHead headTitle={"PokeList"} description={description} />
      <Header title={title} />
      <PokemonPageContainer>
        <SideBar />
        {children}
      </PokemonPageContainer>
      <Footer />
    </>
  );
};

export default PokemonListLayout;
