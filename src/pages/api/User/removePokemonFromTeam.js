import prisma from "../../../lib/prismadb";

export default async function handler(req, res) {
  const pokemonId = req.body.body.pokemonId;

  const User = await prisma.user.findMany({
    where: {
      email: req.body.body.session.user.email,
    },
  });

  let pokebox = User[0].pokebox.split(",");
  const index = pokebox.indexOf(pokemonId.toString());
  try {
    pokebox.splice(index, 1);
  } catch (e) {
    return res.status(200).json({ message: e.message });
  }

  await prisma.user.update({
    where: {
      email: req.body.body.session.user.email,
    },
    data: {
      pokebox: pokebox.toString(),
    },
  });
  res.status(200).json({ name: "John Doe" });
}
