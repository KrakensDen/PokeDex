import React from "react";
import Header from "./Navbar";
import Footer from "./Footer/Footer";
import AppHead from "./AppHead";
import { PokemonPageContainer } from "../components/styled/containers/Container.styles";
import SideBar from "../layouts/SideBar/SideBar";

const PokemonListLayout = ({ children, title, description }) => {
  return (
    <div style={{ backgroundImage: 'url("/images/BG.jpg")' }}>
      <div style={{ background: "#1c1c1cbb", color: "#ddddddee" }}>
        <AppHead headTitle={"PokeList"} description={description} />
        <Header title={title} />
        <PokemonPageContainer>
          <SideBar />
          {children}
        </PokemonPageContainer>
        <Footer />
      </div>
    </div>
  );
};

export default PokemonListLayout;
