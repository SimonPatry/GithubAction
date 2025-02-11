const { app, getRoutes } = require("../server");

describe("Server Test", () => {
  test("should start the server and retrieve routes", () => {
    const routes = getRoutes();

    // Ensure that the number of routes is as expected
    expect(routes.length).toBe(2); // Update this number as you add more routes
  });
});
