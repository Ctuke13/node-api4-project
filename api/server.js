const express = require("express");
const Users = require("./user-model");

const server = express();

server.use(express.json());

//ENDPOINTS

server.get("/api/users", async (req, res) => {
  try {
    const users = await Users.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({
      message: `Error retrieving all user occured: ${err.message}`,
    });
  }
});

server.post("/api/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({
        message: "Must add username and password",
      });
    } else {
      const createdUser = await Users.create({
        username,
        password,
      });
      res
        .status(201)
        .json({ message: "success registering new user", user: createdUser });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: `Error registering new user: ${err.message}` });
  }
});

module.exports = server;
