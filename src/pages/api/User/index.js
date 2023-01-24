import prisma from "../../../lib/prismadb";

export default async function handler(req, res) {
  const date = await prisma.user.findMany({
    where: {
      email: req.body.session.user.email,
    },
  });

  res.status(200).send({ data: date });
}
