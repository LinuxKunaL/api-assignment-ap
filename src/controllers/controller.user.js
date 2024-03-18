import { config } from "../config.js";
import jwt from "jsonwebtoken";

const verifyUser = async (req, res, next) => {
  if (!req.headers.authorization)
    return res.status(404).json({
      message: "Bearer token must be provided!",
    });

  const dearerToken = req.headers?.authorization?.split(" ")[1];

  // This jwt.verify() function verify jwt token.
  jwt.verify(dearerToken, config.jwt.key, (err, decode) => {
    if (err) {
      if (err.name === "JsonWebTokenError") {
        return res.status(404).json({
          message: "Please provide a valid token.",
        });
      } else if (err.name === "TokenExpiredError") {
        return res.status(404).json({
          message: "Token expired. Please provide a valid token.",
        });
      } else {
        return res.status(404).json({
          message: "Token verification failed.",
        });
      }
    }

    // This next() function forward the request if jwt token is verified .
    return next();
  });
};

const generateToken = async (req, res) => {
  const { username, password } = req.body;

  if (username !== config.credential.username)
    return res.status(200).send("username is wrong");

  if (password !== config.credential.password)
    return res.status(200).send("password is wrong");

  // This jwt.sign() function generate the jwt token.
  const key = jwt.sign({ username }, config.jwt.key, {
    expiresIn: config.jwt.expire,
  });

  return res.status(201).send(key);
};

export { verifyUser, generateToken };
