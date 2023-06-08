import React, { useEffect } from "react";
import "./TextBall.css";


import TagCloud from "TagCloud";

const TextBall = () => {
  useEffect(() => {
    const container = '.tagcloud';
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
      radius: 300 ,
      maxSpeed: 'normal',
      initSpeed: 'normal',
      keep: true,
    };

    TagCloud(container, texts, options);
  }, []);

  return (
    <>
      <div className="text-shpere" data-aos="fade-right">
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextBall;