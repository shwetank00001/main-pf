import React, { useEffect } from "react";
import "./TextBall.css";


import TagCloud from "TagCloud";

const TextBall = () => {
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "JavaScript",
        "Mongo",
        "Express",
        "React",
        "NodeJS",
        "API",
        "ES6",
        "Python",
        "Django",
        "GIT",
        "C++",
        "GITHUB",
        "FLASK",
        "MySQL",
      ];

      const options = {
        radius: 300,
        maxSpeed: "fast",
        initSpeed: "fast",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, [0]);

  return (
    <>
      <div className="text-shpere" data-aos="fade-right">
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextBall;