const { app, getRoutes } = require("../server");
const request = require("supertest");

describe("API Endpoints and Tests Count", () => {
  beforeAll(() => {
    console.log("checking start of last file");
    console.log(getTestCount());
  });

  test("GET / doit renvoyer un statut 200 et contenir 'Server launched successfully'", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toContain("Server launched successfully");
  });

  afterAll(() => {
    const endpoints = getRoutes();
    const executedTestCount = getTestCount(); // Get the total test count
    console.log(`Number of API endpoints: ${endpoints.length}`);
    console.log(`Number of executed tests: ${executedTestCount}`);
    expect(executedTestCount).toBe(endpoints.length); // Assert that counts match
    // resetTestCount(); // Reset count if needed for next runs
  });
});
