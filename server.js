const express = require("express");
const app = express();

app.set("view engine", "ejs");

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

// Function to retrieve defined routes in the application
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

// Exporting the app and getRoutes for testing
module.exports = { app, getRoutes };

if (require.main === module) {
  const PORT = process.env.PORT || 3005;
  app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
}
