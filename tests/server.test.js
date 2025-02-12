import { app, getRoutes } from "../server.js"; // Ensure you have the .js extension
import request from "supertest";

describe("API Endpoints and Tests Count", () => {
  beforeAll(() => {
    // Optional setup before tests run
  });

  test("GET / doit renvoyer un statut 200 et contenir 'Server launched successfully'", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toContain("Server launched successfully");
    incrementTestCount();
  });

  test("GET /about doit renvoyer un statut 200 et contenir 'About my app'", async () => {
    const response = await request(app).get("/about");
    expect(response.status).toBe(200);
    expect(response.text).toContain("About my app");
    incrementTestCount();
  });

  afterAll(() => {
    const endpoints = getRoutes();
    const executedTestCount = getTestCount();
    expect(executedTestCount).toBe(endpoints.length);
    resetTestCount();
  });
});
