require("dotenv").config({ path: __dirname + "/../.env" });
const express = require("express");
const { SERVER_PORT } = process.env;
const gc = require("./Controllers/Games");

const app = express();

app.use(express.json());

app.post("/api/games", gc.addToWishList);
app.get("/api/games", gc.getAllGames);
app.delete("/api/games/:id", gc.deleteFromWishList);
app.put("/api/games/:id", gc.addNote);

app.listen(SERVER_PORT, () => {
  console.log(`listening on port ${SERVER_PORT}`); 
}); 
