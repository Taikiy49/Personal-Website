import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer @ Geolabs",
          "Data Scientist @ National Science Foundation",
          "Teaching Assistant & Grader @ UC Irvine",
          "CS / Math Tutor @ Honolulu Tutoring",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
