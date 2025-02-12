import express from "express";
import indexRouter from "./routes/index.js";

const app = express();

app.set("view engine", "ejs");
app.use("/", indexRouter);

// Function to retrieve defined routes in the application
const getRoutes = () => {
  const routes = [];
  app._router.stack.forEach((middleware) => {
    if (middleware.route) {
      routes.push(middleware.route);
    } else if (middleware.name === "router") {
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
export { app, getRoutes };

// Start the server only if this file is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  const PORT = process.env.PORT || 3005;
  app.listen(PORT, () =>
    console.log(`Server started on http://localhost:${PORT}`),
  );
}
