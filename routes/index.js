import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server launched successfully");
});

router.get("/about", (req, res) => {
  res.send("About my app");
});

export default router;
