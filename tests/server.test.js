const request = require("supertest");
const app = require("../server");

describe("Test du serveur Express", () => {
  test("GET / doit renvoyer un statut 200 et contenir 'Server launched successuflly'", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toContain("Server launched successuflly");
  });
});
