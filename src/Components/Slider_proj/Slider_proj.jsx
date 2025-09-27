import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Slider_proj.css";
import slider_proj_1 from '../../assets/Alloy/alloyss2.jpg';
import slider_proj_4 from '../../assets/slider_proj4.png';

const Slider_proj = () => {
  let isFirstRender = true;
  const intervalIdRef = useRef(null);

  useEffect(() => {
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    const slider = document.querySelector('.slider_proj');
    const sliderList = slider.querySelector('.slider_proj .slider_proj-list');
    const thumbnail = document.querySelector('.slider_proj .slider_proj-thumbnail');
    const thumbnailItems = Array.from(thumbnail.querySelectorAll('.slider_proj-item'));

    // Clear and re-append thumbnails
    thumbnail.innerHTML = '';
    thumbnailItems.forEach(item => thumbnail.appendChild(item));

    if (isFirstRender) {
      thumbnail.appendChild(thumbnailItems[0]);
      isFirstRender = false;
    }

    function startInterval() {
      intervalIdRef.current = setInterval(() => {
        moveSlider('next');
      }, 6000);
    }

    function resetInterval() {
      clearInterval(intervalIdRef.current);
      startInterval();
    }

    nextBtn.onclick = function () {
      moveSlider('next');
      resetInterval();
    };

    prevBtn.onclick = function () {
      moveSlider('prev');
      resetInterval();
    };

    startInterval();

    function moveSlider(direction) {
      const sliderItems = sliderList.querySelectorAll('.slider_proj .slider_proj-list .slider_proj-item');
      const thumbnailItems = document.querySelectorAll('.slider_proj .slider_proj-thumbnail .slider_proj-item');

      if (direction === 'next') {
        sliderList.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add('next');
      } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider.classList.add('prev');
      }

      slider.addEventListener('animationend', function () {
        slider.classList.remove(direction === 'next' ? 'next' : 'prev');
      }, { once: true });
    }

    function handleKeyPress(event) {
      if (event.key === 'ArrowRight') {
        moveSlider('next');
        resetInterval();
      } else if (event.key === 'ArrowLeft') {
        moveSlider('prev');
        resetInterval();
      }
    }

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      clearInterval(intervalIdRef.current);
    };
  }, []);

  return (
    <div className="slider_proj">
      <div className="slider_proj-list">
        <div className="slider_proj-item">
          <img src={slider_proj_1} alt="" />
          <div className="slider_proj-content">
            <div className="slider_proj-title">Alloy</div>
            <div className="slider_proj-description">
              Modular- Glazed Partition<br />
              Curved Single Glazed partition with Grids.<br />
            </div>
            <div className="slider_proj-button">
              <Link to='/Products/Alloy'><button>SEE More</button></Link>
            </div>
          </div>
        </div>

        <div className="slider_proj-item">
          <img src={slider_proj_4} alt="" />
          <div className="slider_proj-content">
            <div className="slider_proj-title">Collaborative Furniture</div>
            <div className="slider_proj-description">
              Creating 3rd Space<br />
              Lounge Furniture, Café Furniture, Reception<br />
              Furniture, Collab Huddle Space furniture
            </div>
            <div className="slider_proj-button">
              <Link to='/Products/Furniture'><button>SEE More</button></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="slider_proj-thumbnail">
        <div className="slider_proj-item">
          <img src={slider_proj_1} alt="" />
          <div className="slider_proj-content">
            <div className="slider_proj-title">Alloy</div>
          </div>
        </div>

        <div className="slider_proj-item">
          <img src={slider_proj_4} alt="" />
          <div className="slider_proj-content">
            <div className="slider_proj-title">Furniture</div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="slider_proj-nparrows">
        <button className="prev"> &lt; </button>
        <button className="next"> &gt; </button>
      </div>
    </div>
  );
};

export default Slider_proj;
