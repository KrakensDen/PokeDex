import React, { useEffect, useState } from "react";
import PokemonList from "../../components/PokemonList";
import axios from "axios";
import Button from "../../components/styled/elements/Button";
import styled from "styled-components";
import { useSession } from "next-auth/react";
import AppLayout from "../../layouts/AppLayout";
import { PokemonPageContainer } from "../../components/styled/containers/Container.styles";
import SideBar from "../../layouts/SideBar/SideBar";

function PokemonListPage() {
  const pokemon = [
    {
      name: "bulbasaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    {
      name: "charmander",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      name: "charmander",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      name: "charmander",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      name: "charmander",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
  ];

  // * Basic axios call to get the list of Pokémon
  const { data: session, status } = useSession();

  const [pokeData, setPokeData] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [previousPageUrl, setPreviousPageUrl] = useState();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentSelectedPokemonId, setCurrentSelectedPokemonId] = useState();

  //* Putting it in a use effect, so it lets the page load while it's grabbing the data
  useEffect(() => {
    setPokeData([]);
    setLoading(true);
    //* Calling the pokeApi to get the first 20 Pokémon in the list.
    axios.get(currentPageUrl).then((res) => {
      setLoading(false);
      setNextPageUrl(res.data.next);
      setPreviousPageUrl(res.data.previous);
      res.data.results.forEach(async (el) => {
        //* Going in and Making another axios call to the individual Pokémon data and adding it to pokeData useState.
        await axios.get(el.url).then(async (res) => {
          await setPokeData((pData) => Array(res.data, ...pData));
        });
      });
    });
  }, [currentPageUrl]);

  const onNextPageHandler = () => {
    setCurrentPageUrl(nextPageUrl);
  };
  const onPreviousPageHandler = () => {
    setCurrentPageUrl(previousPageUrl);
  };

  const showAddTeamModal = (event, arg) => {
    if (
      event.target.innerText === "Cancel" ||
      event.target.attributes.src.value === "/images/group.png"
    ) {
      setShowModal(!showModal);
      setCurrentSelectedPokemonId(arg);
    }
  };

  const addPokemonToTeam = () => {
    axios
      .post("http://localhost:3000/api/User/addPokemonTooTeam", {
        body: {
          pokemonId: currentSelectedPokemonId,
          session: session,
        },
      })
      .then((res) => {
        console.log(res);

        if (res.data.message === "PokeBox Is Full") {
          alert("PokeBox Is Full");
        } else {
          alert("Pokemon has been added to your Team in your Profile");
        }
      });
    setShowModal(!showModal);
  };

  if (loading) return <h1>Loading...</h1>;

  //* Mapping the pokeData to its rightful spots for an example of how we would do i
  return (
    <div style={{ width: "100%" }}>
      {/*{pokeData.sort(compareNumbers).map((poke) => (*/}
      {/*  <PokemonCard pokemon={poke} />*/}
      {/*))}*/}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: ".5rem ",
        }}
      >
        {previousPageUrl ? (
          <Button color={"#41a5ee"} onClick={onPreviousPageHandler}>
            ← Previous
          </Button>
        ) : (
          <div></div>
        )}
        {nextPageUrl ? (
          <Button color={"#41a5ee"} onClick={onNextPageHandler}>
            Next →
          </Button>
        ) : (
          <div></div>
        )}
      </div>

      <PokemonList showAddTeamModal={showAddTeamModal} pokemon={pokeData} />
      <ModalContainer active={showModal}>
        <ModalBackdrop />
        <Modal>
          <h3>Add Pokemon?</h3>
          <p>Would you like to add this pokemon to your team?</p>
          <BtnContainer>
            <Button onClick={showAddTeamModal} color={"#fe4d34"}>
              Cancel
            </Button>
            <Button onClick={addPokemonToTeam} color={"#41a5ee"}>
              Save
            </Button>
          </BtnContainer>
        </Modal>
      </ModalContainer>
    </div>
  );
}

const BtnContainer = styled.div`
  display: flex;
`;

const Modal = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background: #222222;
  border-radius: 1rem;
  width: 26rem;
  height: 18rem;
`;

const ModalContainer = styled.div`
  position: fixed;
  display: ${(props) => (props.active ? "grid" : "none")};
  place-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
`;
const ModalBackdrop = styled.div`
  background: #22222277;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

PokemonListPage.getLayout = function getLayout(page) {
  return (
    <AppLayout headTitle={"Pokemon List"} title={"PokemonList"}>
      <PokemonPageContainer>
        <SideBar />
        {page}
      </PokemonPageContainer>
    </AppLayout>
  );
};

export default PokemonListPage;
