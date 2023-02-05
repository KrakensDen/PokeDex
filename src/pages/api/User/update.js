import prisma from "../../../lib/prismadb";

export default async function handler(req, res) {
  console.log(req.body.body.username);

  if (!req.body.body.username) {
    return res.status(200).send({ updated: false });
  }

  const updatedUser = await prisma.user.update({
    where: {
      email: req.body.body.session.user.email,
    },
    data: {
      name: req.body.body.username,
    },
  });
  res.status(200).send({ data: updatedUser, updated: true });
}
