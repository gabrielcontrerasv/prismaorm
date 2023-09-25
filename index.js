import express from "express";
const app = express();
const port = 3000;

import {
  getUsers,
  createUser,
  getUsersWithPost,
  getUserWithPost,
} from "./controllers/storeController.js";

app.use(express.json());

app.get("/users", getUsers);
app.post("/users", createUser);
app.get("/usersWithPost", getUsersWithPost);
app.get("/userWithPosts/:email", getUserWithPost);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
