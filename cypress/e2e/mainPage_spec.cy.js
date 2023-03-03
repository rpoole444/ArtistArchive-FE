describe("Artist Archive Main Page, should see all artist and details", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/artists", {
      fixture: "main-page.json",
    });
    cy.visit("http://localhost:3000");
  });

  it("displays two todo items by default", () => {
    cy.contains("Artist Archive");
  });
});
