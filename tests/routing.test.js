const { app, getRoutes } = require("../server");
const request = require("supertest");

describe("Tests du serveur Express", () => {
  
  test("Vérification du nombre de routes", () => {
    const routes = getRoutes();
    console.log(`Routes définies : ${routes.length}`);
    expect(routes.length).toBeGreaterThan(0);
  });

  test("GET / doit renvoyer un statut 200 et le bon message", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toContain("Hello, CI/CD !");
  });

  test("GET /about doit renvoyer un statut 200 et le bon message", async () => {
    const response = await request(app).get("/about");
    expect(response.status).toBe(200);
    expect(response.text).toContain("À propos de l'application");
  });
});
