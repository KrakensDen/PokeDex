import React, { useEffect, useState } from "react";
import pokeTypes from "../../data/__test__/types.json";
import axios from "axios";
import PokemonType from "../../components/PokemonType";

export async function getServerSideProps(ctx) {
  const type = ctx.params.typeid;
  return {
    props: {
      type: type,
    },
  };
}

const Type = ({ type }) => {
  //* Use States for loading the UI and For getting the Pokemon Type data
  const [typeData, setTypeData] = useState();
  const [loading, setLoading] = useState(true);

  //* getting the id from the url path and checking if it is a valid pokemon type
  const validType = type in pokeTypes;

  //* using the useEffect to grab the data when the page gets loaded.
  useEffect(() => {
    //* Set The loading State to true so that there is no hydration errors
    setLoading(true);

    //* calling the PokeAPI depending on the type that was passed into the route
    axios.get(`https://pokeapi.co/api/v2/type/${type}`).then(async (res) => {
      setLoading(false);
      setTypeData(res.data);
    });
  }, [type]);

  //* If the Type in the route is not a valid Pokemon type display this to the page
  if (!validType) {
    return (
      <div>
        <h1> Not a Valid PokeType</h1>
      </div>
    );
  }

  //! When Loading Only
  if (loading) {
    return <div>Loading...</div>;
  }

  //* Once everything is loaded(data is grabbed) and the type is valid then you can display the data
  return (
    <div>
      <h1>{type.charAt(0).toUpperCase() + type.slice(1)} Type</h1>
      <h2>Damage Relations</h2>
      <div style={{ display: "flex" }}>
        {Object.keys(typeData.damage_relations).map((relation) => (
          <div key={relation}>
            <h1>{relation.replaceAll("_", " ")}</h1>
            <div style={{ display: "flex" }}>
              {typeData.damage_relations[relation].map((type) => {
                return <PokemonType key={type.name} type={{ type: type }} />;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Type;
