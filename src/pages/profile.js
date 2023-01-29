import React, { useEffect, useState } from "react";
import { getSession, useSession } from "next-auth/react";
import ProfileHeader from "../components/styled/blocks/ProfileHeader";
import AppLayout from "../layouts/AppLayout";
import axios from "axios";
import SettingModal from "../components/styled/blocks/SettingModal";
import NewPokeCard from "../components/__tests__/NewPokeCard";
import Button from "../components/styled/elements/Button";
import { useRouter } from "next/router";
import styled from "styled-components";

export async function getServerSideProps(ctx) {
  var results = [];
  // Check if we have a session
  const session = await getSession(ctx);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  try {
    //* Make a post request to our own internal API and send the user session data with it to grab all the events to that user
    const response = await axios.post("http://localhost:3000/api/User", {
      session: await getSession(ctx),
    });
    results = response.data;
  } catch (error) {
    console.error(error.response);
  }

  return {
    props: {
      url: ctx.resolvedUrl,
      data: results,
    },
  };
}

const Profile = ({ data, url }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const userImage = session?.user.image;
  const userName = session?.user.name;
  const accountCreated = data.data[0].accountCreated;
  const pokemon = data.data[0].pokebox?.split(",");

  const [showModal, setShowModal] = useState(false);
  const [currentSelectedPokemonId, setCurrentSelectedPokemonId] = useState();

  const [pokebox, setPokebox] = useState([]);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setPokebox([]);
    pokemon?.forEach(async (el) => {
      //* Going in and Making another axios call to the individual Pokémon data and adding it to pokeData useState.
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${el}`)
        .then(async (res) => {
          await setPokebox((pData) => Array(res.data, ...pData));
        });
    });
  }, []);

  const EditProfileHandler = () => {
    setOpen(!open);
  };

  const removePokemonFromTeam = () => {
    axios
      .post("http://localhost:3000/api/User/removePokemonFromTeam", {
        body: {
          pokemonId: currentSelectedPokemonId,
          session: session,
        },
      })
      .then((res) => {
        router.reload(window.location.pathname);
        if (res.data.message === "PokeBox Is Full") {
          alert("PokeBox Is Full");
        }
      });

    setShowModal(!showModal);
  };
  const showRemovePokemonFromTeamModal = (event, arg) => {
    if (
      event.target.innerText === "Cancel" ||
      event.target.attributes.src?.value === "/images/remove.png"
    ) {
      setShowModal(!showModal);
      setCurrentSelectedPokemonId(arg);
    }
  };

  return (
    <div>
      <ModalContainer active={showModal}>
        <ModalBackdrop />
        <Modal>
          <h3>Add Pokemon?</h3>
          <p>
            Would you like to <strong>REMOVE</strong> this pokemon to your team?
          </p>
          <BtnContainer>
            <Button onClick={showRemovePokemonFromTeamModal} color={"#fe4d34"}>
              Cancel
            </Button>
            <Button onClick={removePokemonFromTeam} color={"#41a5ee"}>
              Remove
            </Button>
          </BtnContainer>
        </Modal>
      </ModalContainer>
      <SettingModal open={open} editingProfile={EditProfileHandler} />
      <ProfileHeader
        editingProfile={EditProfileHandler}
        userLvl={0.65}
        userImage={userImage}
        userName={userName}
        accountCreated={new Date(accountCreated).toDateString()}
      />
      <TopSixPokemonContainer>
        <h3>Top Six:</h3>
        <TopSixPokemon>
          {pokebox.map((pokemon) => (
            <NewPokeCard
              key={pokemon.name}
              removePokemonFromTeamModal={showRemovePokemonFromTeamModal}
              url={url}
              pokemon={pokemon}
            />
          ))}
        </TopSixPokemon>
      </TopSixPokemonContainer>
    </div>
  );
};

const TopSixPokemonContainer = styled.div`
  text-align: center;
  margin: 2rem auto;
  padding-top: 2rem;
  border: 2px solid #222222;
  border-radius: 0.75rem;
  width: max-content;

  h3 {
    font-size: 30px;
  }
`;
const TopSixPokemon = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;

  margin: 2rem;
  padding: 1rem 2rem;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const BtnContainer = styled.div`
  display: flex;
`;

const Modal = styled.div`
  position: relative;
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

  strong {
    color: red;
  }
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

Profile.getLayout = function PageLayout(page) {
  return (
    <AppLayout headTitle={"PokeDex - Profile"} title={"Profile"}>
      {page}
    </AppLayout>
  );
};

export default Profile;
