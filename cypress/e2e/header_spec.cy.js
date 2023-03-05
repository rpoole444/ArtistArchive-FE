describe("Artist Archive Main Page, should see all artist and details", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/artists", {
      fixture: "main-page.json",
    });
    cy.visit("http://localhost:3000");
  });

  it("Should have A logo", () => {
    cy.get('img[class="record-icon"]').should('have.attr','alt','turntable');
  })

  it("Should have A title", () => {
    cy.contains("Artist Archive")
  })

  it("Should have A your favorites button", () => {
    cy.get(".favorites-link").contains("Your Favorites")
  })
});