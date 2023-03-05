describe("Should See and empty Favorites page",() => {
  beforeEach(() => {
    cy.intercept("GET", "https://artist-archive-be.herokuapp.com/api/v1/artists", {
      fixture: "main-page.json",
    });
    cy.visit("https://artist-archive-fe.herokuapp.com/favorites");
  });

  it("Should see the favorites Page with logo click home", () => {
    cy.get(".record-icon").click()
    cy.url("https://artist-archive-fe.herokuapp.com/favorites")
    cy.get(".card-container").should("have.length", 3)
  })

  it("Should Click Return home link and also go to homepage", () => {
    cy.get(".landing-page-link").click()
    cy.url("https://artist-archive-fe.herokuapp.com/favorites")
    cy.get(".card-container").should("have.length", 3)
  })

  it("Should be able to add and remove from favorites", () => {
    cy.get(".landing-page-link").click()
    cy.url("https://artist-archive-fe.herokuapp.com/favorites")
    cy.get(".card-container").should("have.length", 3)

  
    cy.get(".learn-more").first().click()

    cy.get(".favorites-button")
      .contains("Add to Favorites")
      .click()

    cy.get(".favorites-button")
    .contains("To Favorites")
    .click()

    cy.get(".learn-more")
    .contains("Learn More")
    .click()

    cy.get(".unfavorite-button")
      .contains("Remove from Favorites")
      .click()

    cy.get(".favorites-button")
      .contains("To Favorites")
      .click()

    cy.contains("Where are your favorites?")
    cy.contains("Go Back and Listen!")
  })
})