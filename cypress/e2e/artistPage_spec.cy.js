describe("Artist Details view, Should see 3 buttons, a movie, and artist details", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/artists/1", {
      fixture: "artist-page.json",
    });
    cy.visit("http://localhost:3000/1")
  })
  it("Should display a Name",()=> {
    cy.contains("Louis Armstrong")
  })
  it("Should contain a watchable video", () => {
    cy.get("iframe").click().should("be.visible")
  })

  it("Should contain a Genre", () => {
    cy.get(".genre-deet").contains("Genre: Jazz")
  })
  it("Should contain a Description", () => {
    cy.get(".bio").contains("Louis Armstrong was born in New Orleans, Louisiana on August 4, 1901. He was raised by his mother Mayann in a neighborhood so dangerous it was called “The Battlefield.” He only had a fifth-grade education, dropping out of school early to go to work. An early job working for the Jewish Karnofsky family allowed Armstrong to make enough money to purchase his first cornet. On New Year’s Eve 1912, he was arrested and sent to the Colored Waif’s Home for Boys. There, under the tutelage of Peter Davis, he learned how to properly play the cornet, eventually becoming the leader of the Waif’s Home Brass Band. Released from the Waif’s Home in 1914, Armstrong set his sights on becoming a professional musician. Mentored by the city’s top cornetist, Joe “King” Oliver, Armstrong soon became one of the most in-demand cornetists in town, eventually working steadily on Mississippi riverboats. In 1922, King Oliver sent for Armstrong to join his band in Chicago. Armstrong and Oliver became the talk of the town with their intricate two-cornet breaks and started making records together in 1923. By that point, Armstrong began dating the pianist in the band, Lillian Hardin. In 1924, Armstrong married Hardin, who urged Armstrong to leave Oliver and try to make it on his own. A year in New York with Fletcher Henderson and His Orchestra proved unsatisfying so Armstrong returned to Chicago in 1925 and began making records under his own name for the first time.")
  })
  it("Should have a Button that Takes you to the Homepage", () => {
    cy.get(".home-button").click()
    cy.url("http://localhost:3000")
  })
  it("Should have an Add to Favorites that toggles on Remove from favorites.", () => {
    cy.get(".favorites-button")
    .contains("Add to Favorites")
    .click()

    cy.get(".unfavorite-button")
      .contains("Remove from Favorites")
      .click()

    cy.get(".favorites-button")
      .contains("Add to Favorites")

  })

  it("Should have a button that takes you to your Favorites page", () => {
    cy.get(".favorites-button")
    .contains("To Favorites")
    .click()

    cy.url("https://localhost:3000").should("include","/favorites")
    cy.contains("Where are your favorites?")
    cy.contains("Go Back and Listen!")
  })

  it("Should be able to Add Favorites", () => {
    cy.get(".favorites-button")
    .contains("Add to Favorites")
    .click()

    cy.get(".favorites-button")
    .contains("To Favorites")
    .click()

    cy.contains("Louis Armstrong")
  })

  it("Should be able to Remove Favorites while also using Learn More Button on Card to return to the Artist page before unfavoriting", () => {
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