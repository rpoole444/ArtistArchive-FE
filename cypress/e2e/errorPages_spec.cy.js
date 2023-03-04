describe("",() => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/artists", {
      fixture: "main-page.json",
    });

  });

  it("Should see Error Page when a bogus URL is used", () => {
    cy.visit("http://localhost:3000/bogusURL")

    cy.contains("Page Not Found")
    
    cy.contains("404 Error")
  })

  it("Should be able to click home if you get a bogus URL", () => {
    cy.visit("http://localhost:3000/bogusURL")

    cy.contains("Page Not Found")

    cy.contains("404 Error")

    cy.get(".link").click()
    cy.url("http://localhost:3000")
  })

  it("Should Go to the error page with the header if there is another type of bogus URL", () => {
    cy.visit("http://localhost:3000/1/FAKE")

    cy.contains("Page Not Found")
    cy.contains("404 Error")
  })
})