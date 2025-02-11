const request = require("supertest");
const app = require("../server").app;

describe("Routing Test", () => {
  test("GET / doit renvoyer un statut 200 et contenir 'Server launched successfully'", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toContain("Server launched successfully");
  });

  test("GET /about doit renvoyer un statut 200 et contenir 'About my app'", async () => {
    const response = await request(app).get("/about");
    expect(response.status).toBe(200);
    expect(response.text).toContain("About my app");
  });
});
