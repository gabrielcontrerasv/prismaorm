import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function getUsers(req, res) {
  prisma.user.findMany().then((data) => {
    res.json(data);
  });
}

export async function getUsersWithPost(req, res) {
  const userWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  res.json(userWithPosts);
}

export async function getUserWithPost(req, res) {
  const userWithPosts = await prisma.user.findFirstOrThrow({
    where: {
      email: req.params.email,
    },
    include: {
      posts: true,
    },
  });
  res.json(userWithPosts);
}

export function createUser(req, res) {
  const { name, email } = req.body;
  if (!name || !email) {
    throw new Error("Name and email are required");
  }
  try {
    const newUser = prisma.user.create({
      data,
    });

    res.json(newUser);
  } catch (error) {
    res.json({ error: error.message });
  }
}
