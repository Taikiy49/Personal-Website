import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer @ Geolabs",
          "Ado Music Enthusiast 🎵",
          "Golf & Pickleball Player ⛳🏓",
          "UC Irvine CS Student",
          "AI & Data Science Researcher",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
