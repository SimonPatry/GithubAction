const express = require("express");
const app = express();

app.set("view engine", "ejs");

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

// Fonction pour récupérer les routes définies dans l'application
const getRoutes = () => {
  const routes = [];
  app._router.stack.forEach((middleware) => {
    if (middleware.route) {
      routes.push(middleware.route);
    } else if (middleware.name === 'router') {
      middleware.handle.stack.forEach((handler) => {
        if (handler.route) {
          routes.push(handler.route);
        }
      });
    }
  });
  return routes;
};


if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
}

module.exports = { app, getRoutes };