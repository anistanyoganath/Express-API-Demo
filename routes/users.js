import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const users = [
  {
    name: "Aravindh",
    lastname: "rrr",
    age: 25,
  },

  {
    name: "sss",
    lastname: "ee",
    age: 25,
  },
];

router.get("/", (req, res) => {
  res.send(users);
});
router.post("/", (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send("Post Routed");
});

//find user by id
router.get("/:id", (req, res) => {
  const { id } = req.body;
  const user = users.find((user) => user.id === id);
  res.send(user);
});

export default router;
