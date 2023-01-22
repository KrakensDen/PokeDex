import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import pokeTypes from "./../../components/__tests__/types.json";
import axios from "axios";

const Type = () => {
  const router = useRouter();

  //* Use States for loading the UI and For getting the Pokemon Type data
  const [typeData, setTypeData] = useState();
  const [loading, setLoading] = useState(true);

  //* getting the id from the url path and checking if it is a valid pokemon type
  const type = router.query.typeid;
  const validType = type in pokeTypes;

  //* using the useEffect to grab the data when the page gets loaded.
  useEffect(() => {
    //* Set The loading State to true so that there is no hydration errors
    setLoading(true);

    //* calling the PokeAPI depending on the type that was passed into the route
    axios.get(`https://pokeapi.co/api/v2/type/${type}`).then((res) => {
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
        {Object.keys(typeData.damage_relations).map((p) => (
          <div>
            <h1>{p.replaceAll("_", " ")}</h1>
            <div>
              {typeData.damage_relations[p].map((p) => {
                return (
                  <img
                    key={p.name}
                    height={30}
                    width={30}
                    alt={`${p.name} img`}
                    src={pokeTypes[p.name].img}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Type;
