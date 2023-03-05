# Artist Archive

Do you ever find yourself in a musical slump? Maybe you haven't found music that you love or maybe you are tired of hearing your usual playlists? Well look no further as Artist Archive aims to inspire the uninspired ear!  This website contains a special collection of Incredible musical artist from many differing genres.  Look through the Archive and find new and exciting musical artists!  Each artist click takes you to a description and an inspiring musical video of the Artist.  But wait, if a user find artists that resonate with them, you can collect your favorites into a private favorites collections!  Don't waste another momoetn and find the deployed site below

Deployed FrontEnd Application here: [Artist Archive FE](https://artist-archive-fe.herokuapp.com/)
Deployed BackEnd Express App here: [Artist Archive BE](https://artist-archive-be.herokuapp.com/api/v1/artists)

## Table of Contents
  - [Setup](#setup)
  - [Technologies](#technologies)
  - [Project Spec](#project-spec)
  - [Abstract](#abstract)
  - [Learning Goals](#learning-goals)
  - [Preview](#preview)
  - [Wins + Challenges](#wins-and-challenges)
  - [Authors](#Authors)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation Instructions <a name="installationInstructions"></a>

1. Clone down [this repository](https://github.com/rpoole444/shelf-life-FE)
2. Run `npm install`
3. Run `npm start` in your terminal
4. Go to http://localhost:3000/ and you should see the website
5. Enter `control + c` in your terminal to stop the server at any time.

## Technologies
  - Javascript
  - CSS / HTML
  - VSCode
  - Git Version Control / GitHub
  - Webpack node package
  - React 
  - Router
  - Google Chrome or Web Browser of User's Choice
  - Mac OS Terminal/Command Line
  - Cypress
  - Node.js 
  
## Project Spec
[Project Spec here](https://frontend.turing.edu/projects/module-3/showcase.html)

## Abstract 

This project is designed to allow users to learn more about inspiring musical artist. As the user visits the page, a number of Artist posters are displayed. The main page also includes a link to view the users favorited books. A user can click on each book poster and a new page will open with all of the artist details along with an embedded video. Once a user is on the details page, they will see a description, a video, an option to add and remove a book from the favorites.  When the user chooses to return home, they can click a home button on the top left of the screen (the record player logo). If there is an lag or errors from the server, the app also includes error handling.

I created a backend for this project that was aimed at people who need better music in there life and as a part of our Showcase assignment! We were given an 5 day timeframe to build the FULL STACK APP

## Learning Goals

- Build Backend using Express
- Gain competency with React fundamentals
- Impliment Router
- Learn how to test React components & asynchronous JS
- Practice refactoring
- Create a multi-page UX using Router

## Visual of Functionality:

Scroll through the main page to view all artists in the database. Each books's cover, title, Recommendation and author are visible.

Click on the 'Learn More' button next to a book cover that interests you to view a book's details. On this page a description of the book's plot is presented. The user is also given the ability to add to or remove a book from their favorites as well as the option to buy the book on Amazon. They can view all of their favorited books by clicking the "Your favorites" button at the top right of the page. Click the book club logo at the top left of the page to return to the main page.

[video of functionalit](https://www.veed.io/view/cd7389d4-2879-475d-aa6b-827cbfe0fa38?panel=share)

## Code Architecture <a name="codeArchitecture"></a>

The React architecture is based on 8 functional components using React Hooks (App.js, ArtistDetails.js, Favorites.js, Header.js, ErrorPage.js, BookLibrary.js, ArtistCard.js). The Hooks help hold state in each of our components, but for favorites we pass the state of our App favorites array as props to our necassary components. 

## Wins & Challenges

- Successfully built a full stack app!
- Successfully created app using React framework
- Successfully implemented Router
- Successfully implemented cypress testing to check functionality
- Successfully implemented loading and error handling 
- Challenges: Creating a fresh custom backend and then manipulating the data using React was a learning curve, but ultimately it was super cool to build a full stack app!
- Challenge: Implementing cypress was something challenging for us, so getting th syntax correct took additional research. 
- Challenges: Error was tricky but we were able to add properties to state to handle errors. 
- To Further this App I would add a database on the backend so a users favorites could save and stay in the cloud till the next login, additionally I would like to add a POST functionality inside of a Recommended page/component so a user could recomend music that inspires them!

## Authors

<table>
    <tr>
      <td> Reid Poole <a href="https://github.com/rpoole444">GH</td>
    </tr>
<td><img src="https://avatars.githubusercontent.com/u/111818942?v=4" alt="Reid Poole"
 width="150" height="auto" /></td>
</table>
  
