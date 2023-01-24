import React, { useEffect, useState } from "react";
import { getSession, useSession } from "next-auth/react";
import ProfileHeader from "../components/styled/blocks/ProfileHeader";
import AppLayout from "../layouts/AppLayout";
import axios from "axios";
import SettingModal from "../components/styled/blocks/SettingModal";
import NewPokeCard from "../components/__tests__/NewPokeCard";

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
  const { data: session, status } = useSession();
  const userImage = session?.user.image;
  const userName = session?.user.name;
  const accountCreated = data.data[0].accountCreated;
  const pokemon = data.data[0].pokebox.split(",");

  const [pokebox, setPokebox] = useState([]);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setPokebox([]);
    pokemon.forEach(async (el) => {
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

  return (
    <div>
      <SettingModal open={open} editingProfile={EditProfileHandler} />
      <ProfileHeader
        editingProfile={EditProfileHandler}
        userLvl={0.65}
        userImage={userImage}
        userName={userName}
        accountCreated={new Date(accountCreated).toDateString()}
      />
      <div style={{ display: "flex" }}>
        {pokebox.map((pokemon) => (
          <NewPokeCard url={url} pokemon={pokemon}></NewPokeCard>
        ))}
      </div>
    </div>
  );
};

Profile.getLayout = function PageLayout(page) {
  return (
    <AppLayout headTitle={"PokeDex - Profile"} title={"Profile"}>
      {page}
    </AppLayout>
  );
};

export default Profile;
