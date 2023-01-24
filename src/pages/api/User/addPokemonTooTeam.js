import prisma from "../../../lib/prismadb";

export default async function handler(req, res) {
  const pokemonId = req.body.body.pokemonId;

  const User = await prisma.user.findMany({
    where: {
      email: req.body.body.session.user.email,
    },
  });

  let pokebox = User[0].pokebox;
  if (pokebox.split(",").length >= 6) {
    return res.status(200).json({ message: "PokeBox Is Full" });
  }
  pokebox = pokebox.replace('"', "");
  pokebox += pokebox ? `,${pokemonId}` : `${pokemonId}`;
  console.log(pokebox);
  console.log(pokebox.split(","));

  const newData = await prisma.user.update({
    where: {
      email: req.body.body.session.user.email,
    },
    data: {
      pokebox: pokebox,
    },
  });
  res.status(200).json({ name: "John Doe" });
}
