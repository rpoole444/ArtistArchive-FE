describe("Artist Archive Main Page, should see all artist and details", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/artists", {
      fixture: "main-page.json",
    });
    cy.visit("http://localhost:3000");
  });

  it("Header should have and image title and yourfavorites button", () => {

  })
  
  it("Should display a title, cards that includes artists, with name, image, Genre, rank and learn more button", () => {
    cy.contains("Artist Archive");

    cy.get(".card-container").should("have.length", 3)
    cy.get(".card-image").should("have.length", 3)
    cy.get(".lm-button").should("have.length", 3)

    cy.contains("Louis Armstrong")
    cy.contains("J Dilla")
    cy.contains("Randy Newman")

    cy.contains("Genre: Jazz")
    cy.contains("Genre: Hip-Hop")
    cy.contains("Genre: Pop")

    cy.contains("Rank: 1")
    cy.contains("Rank: 24")
    cy.contains("Rank: 30")
  });

  it("Should be able to click the Learn me button of an Artist Card and visit the Artist's details", () => {
    cy.get(".learn-more").first().click()
    cy.intercept("GET", "http://localhost:3001/api/v1/artists/1", {
      id: "1",
      name: "Louis Armstrong",
      image: "https://www.celebstoner.com/assets/components/directresize/cache/dr_LouisArmstrongSmoking_w625_h495.jpg",
      rank: 1,
      description: "Louis Armstrong was born in New Orleans, Louisiana on August 4, 1901. He was raised by his mother Mayann in a neighborhood so dangerous it was called “The Battlefield.” He only had a fifth-grade education, dropping out of school early to go to work. An early job working for the Jewish Karnofsky family allowed Armstrong to make enough money to purchase his first cornet.  On New Year’s Eve 1912, he was arrested and sent to the Colored Waif’s Home for Boys. There, under the tutelage of Peter Davis, he learned how to properly play the cornet, eventually becoming the leader of the Waif’s Home Brass Band. Released from the Waif’s Home in 1914, Armstrong set his sights on becoming a professional musician. Mentored by the city’s top cornetist, Joe “King” Oliver, Armstrong soon became one of the most in-demand cornetists in town, eventually working steadily on Mississippi riverboats. In 1922, King Oliver sent for Armstrong to join his band in Chicago. Armstrong and Oliver became the talk of the town with their intricate two-cornet breaks and started making records together in 1923. By that point, Armstrong began dating the pianist in the band, Lillian Hardin. In 1924, Armstrong married Hardin, who urged Armstrong to leave Oliver and try to make it on his own. A year in New York with Fletcher Henderson and His Orchestra proved unsatisfying so Armstrong returned to Chicago in 1925 and began making records under his own name for the first time. ",
      genre: "Jazz",
      video: "gEdq64SIp4E",
      isFavorited: false
    } )
    cy.url("http://localhost:3000/").should('include', "1")
  })

  it("Should be able to go to Favorites Page", () => {
    cy.get(".favorites-link").click()
    cy.url("http://localhost:3000/").should('include', "favorites")
    
    cy.get(".favorites-container")
      .should("contain", "You haven't favorited any musicians yet!")
    
    cy.contains("Where are your favorites?")
    cy.contains("Go Back and Listen!")

    })

  
});
