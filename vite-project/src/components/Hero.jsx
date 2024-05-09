import React from "react";

const Hero = (props) => {
  return (
    <div>
      <div className="hero">
        <h1>{props.message}</h1>
        <p>Welcome to our website!</p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default Hero;
