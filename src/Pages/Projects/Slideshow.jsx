/* import React, { useState, useEffect } from "react";
import "./Projects.css";


const ProjectSlideshow = ({ images, name }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="slshow">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <div className="caption">{name}</div>
    </div>
  );
};

export default ProjectSlideshow; */
