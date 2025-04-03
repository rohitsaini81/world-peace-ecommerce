import express from "express";
import login from "./login.js";
import database from "./database.js";
import { getAllUsers, getOneUserByEmail } from "../Models/sql.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/index.html");
});

router.get("/cart", (req, res) => {
  console.log("Cookies:", req.cookies);

  if (!req.cookies.sessionId) {
    return res.status(401).send("You are not authorized to view this page");
  }

  const receivedCookie = req.cookies.sessionId;
  console.log("Received Cookie:", receivedCookie);

  const [userId, sessionId] = receivedCookie.split("%");
  console.log("---> ", userId, sessionId);

  if (login.homepageAuthentication(userId, sessionId)) {
    return res.json({ cart: { dummy_data1: "shoes", test: "test" } });
  }

  return res.status(403).send("Invalid session");
});

router.get("/logout", (req, res) => {
  const sessionId = req.cookies.sessionId || false;

  if (sessionId) {
    const userIndex = database.registered_users.findIndex(
      (user) => user.sessionId === sessionId
    );
    if (userIndex !== -1) {
      database.registered_users.splice(userIndex, 1);
    }
  }

  res.clearCookie("sessionId").redirect("/");
});

router.post("/register", async (req, res) => {
  const { username, email, password, phone } = req.body;

  try {
    if (!username || !password || !email || !phone) {
      return res.status(400).send("Missing required fields");
    }

    const user = await getOneUserByEmail(email);
    console.log(user);
    if (user) {
      return res.status(400).send("Email already exists");
    } else {
      const response = login.registerUser(username, email, password, phone);
      if (response.error) {
        return res.status(400).send(response.error);
      }
      console.log("User registered successfully " + user);
      return res
        .cookie("sessionId", `${user.email}%${user.sessionId}`, {
          maxAge: 50000,
          httpOnly: true,
        })
        .send("/home");
    }
  } catch (error) {
    console.error(error);
    res
      .status(401)
      .send("Something went wrong while registering, please try again");
  }
});

router.get("/loginInterface", (req, res) => {
  if (req.cookies.sessionId) {
    return res.redirect("/home");
  }

  res.redirect("/loginInterface.html");
});

router.post("/login", (req, res) => {
  console.log("Received Data:", req.body);
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).send("Missing username or password");
    }

    if (login.authenticateUser(username, password)) {
      const user = database.registered_users.find(
        (user) => user.username === username
      );
      console.log("Login successful");

      return res
        .status(200)
        .cookie("sessionId", `${user.username}%${user.sessionId}`, {
          maxAge: 50000,
          httpOnly: true,
        })
        .send("Login successful");
    }

    res.status(401).send("Invalid username or password !");
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong while login, please try again");
  }
});

export default router;
