import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer @ Geolabs",
          "Data Scientist @ NSF",
          "TA & Grader @ UC Irvine",
          "CS & Math Tutor @ Honolulu Tutoring",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
