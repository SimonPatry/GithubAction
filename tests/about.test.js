const request = require("supertest");
const app = require("../server");

describe("Test du endpoint About", () => {
  test("GET / doit renvoyer un statut 200 et contenir 'About page!'", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toContain("About page!");
  });
});
