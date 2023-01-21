import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import pokeTypes from "./../../components/__tests__/types.json";
import axios from "axios";

const Type = () => {
  const router = useRouter();

  const [typeData, setTypeData] = useState();
  const [loading, setLoading] = useState(true);

  const type = router.query.typeid;
  const validType = type in pokeTypes;

  useEffect(() => {
    setLoading(true);
    axios.get(`https://pokeapi.co/api/v2/type/${type}`).then(async (res) => {
      setLoading(false);
      await setTypeData(res.data);
    });
  }, []);

  console.log(typeData);
  if (!validType) {
    return (
      <div>
        <h1> Not a Valid PokeType</h1>
      </div>
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{type.charAt(0).toUpperCase() + type.slice(1)} Type</h1>
      <div>
        <h2>Damage Relations</h2>
        {Object.keys(typeData.damage_relations).map((p) => (
          <div>
            <h1>{p.replaceAll("_", " ")}</h1>
            {typeData.damage_relations[p].map((p) => {
              return <div>{p.name}</div>;
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Type;
