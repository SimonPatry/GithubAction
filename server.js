const express = require("express");
const app = express();

// Configuration d'EJS
app.set("view engine", "ejs");

// Route principale
app.get("/", (req, res) => {
  res.render("index", { message: "Hello, CI/CD avec GitHub Actions !" });
});

// Lancement du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur démarré sur http://localhost:${PORT}`));
