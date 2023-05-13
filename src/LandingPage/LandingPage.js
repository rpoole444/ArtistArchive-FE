import React, { useState, useEffect } from "react";
import "./LandingPage.css"

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <h1>Welcome to the Archive!</h1>
      <section className="information-picture-container"></section>
      {/* Scrolling bar that goes through each artist's picture */}
      {/* Get array of artists as props, then map through for only the pictures */}
      {/* Then add auto scroll ALL ON LEFT SIDE OF SCREEN */}
      <section className="information">
        <h2> About the Archive </h2>
        <article> Artist Archive, created by Reid, is a meticulously curated platform designed for music lovers and enthusiasts. The website showcases a refined selection of artists, providing detailed information about each, including their genre, discography, and even their ranking. What sets Artist Archive apart is its integration of concerts and performances, each hosted on YouTube, giving users a unique opportunity to explore and enjoy these artists' live performances. Reid's attention to detail and focus on providing an immersive musical journey makes Artist Archive an engaging experience for users to discover and appreciate a wide range of artists.</article>
      </section>
    </div>
  )
}

export default LandingPage