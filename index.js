import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";
import postsRoutes from "./routes/posts.js";

const app = express();
const Port = 5000;

app.use(bodyParser.json());

app.use("/users", userRoutes);
app.use("/posts", postsRoutes);

app.listen(Port, () => {
  console.log(`Server Running on http://localhost:${Port}`);
});
app.get("/", (req, res) => res.send("Hello!"));
