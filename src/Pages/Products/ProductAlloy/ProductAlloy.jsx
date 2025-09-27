// import React, { useEffect, useRef, useState } from 'react';
// import './ProductAlloy.css';
// import alloyss1 from '../../../assets/Alloy/alloyss1.jpg';
// import alloyss2 from '../../../assets/Alloy/alloyss2.jpg';
// import alloyss3 from '../../../assets/Alloy/alloyss3.jpg';
// import alloyss4 from '../../../assets/Alloy/alloyss4.jpg';
// import alloyss5 from '../../../assets/Alloy/alloyss5.jpg';
// import alloyss6 from '../../../assets/Alloy/alloyss6.jpg';
// import alloyLogo from '../../../assets/Alloy/alloy-logo.jpg';
// import customerServiceIcon from '../../../assets/Alloy/customerserviceicon.png';
// import highAcousticIcon from '../../../assets/Alloy/highacoustic.png';
// import envFriendlyIcon from '../../../assets/Alloy/envfriendly.png';
// import sampleAndMockupIcon from '../../../assets/Alloy/sampleandmockup.png';



// import alloygrid1 from '../../../assets/Alloy/alloygrid1.jpg';
// import alloygrid2 from '../../../assets/Alloy/alloygrid2.jpg';
// import alloygrid3 from '../../../assets/Alloy/alloygrid3.jpg';
// import alloygrid4 from '../../../assets/Alloy/alloygrid4.jpg';
// import alloygrid5 from '../../../assets/Alloy/alloygrid5.jpg';
// import alloygrid6 from '../../../assets/Alloy/alloygrid6.jpg';
// import alloygrid7 from '../../../assets/Alloy/alloygrid7.jpg';
// import alloygrid8 from '../../../assets/Alloy/alloygrid8.jpg';
// import alloygrid9 from '../../../assets/Alloy/alloygrid9.jpg';
// import alloygrid10 from '../../../assets/Alloy/alloygrid10.jpg';
// import alloygrid11 from '../../../assets/Alloy/alloygrid11.jpg';
// import alloygrid12 from '../../../assets/Alloy/alloygrid12.jpg';
// import alloygrid13 from '../../../assets/Alloy/alloygrid13.jpg';
// import alloygrid14 from '../../../assets/Alloy/alloygrid14.jpg';
// import alloygrid15 from '../../../assets/Alloy/alloygrid15.jpg';
// import alloygrid16 from '../../../assets/Alloy/alloygrid16.jpg';
// import alloygrid17 from '../../../assets/Alloy/alloygrid17.jpg';
// import alloygrid18 from '../../../assets/Alloy/alloygrid18.jpg';
// import alloygrid19 from '../../../assets/Alloy/alloygrid19.jpg';
// import alloygrid20 from '../../../assets/Alloy/alloygrid20.jpg';

// const productImages = [
//   alloygrid1,
// alloygrid2,
// alloygrid3,
// alloygrid4,
// alloygrid5,
// alloygrid6,
// alloygrid7,
// alloygrid8,
// alloygrid9,
// alloygrid10,
// alloygrid11,
// alloygrid12,
// alloygrid13,
// alloygrid14,
// alloygrid15,
// alloygrid16,
// alloygrid17,
// alloygrid18,
// alloygrid19,
// alloygrid20
  
  
//   // Add the rest similarly
// ];

// const ProductAlloy = () => {
//   const slideshowIntervalRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalImage, setModalImage] = useState('');
//   const [currentProductIndex, setCurrentProductIndex] = useState(0);
//   const [isSlideshowActive, setIsSlideshowActive] = useState(false);
//   const productItemsRef = useRef([]);

//   const images = [alloyss1, alloyss2, alloyss3, alloyss4, alloyss5, alloyss6];

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible');
//           observer.unobserve(entry.target);
//         }
//       });
//     }, { threshold: 0.1 });

//     productItemsRef.current.forEach(item => observer.observe(item));
    
//     return () => {
//       productItemsRef.current.forEach(item => observer.unobserve(item));
//     };
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   const openModal = (image, index) => {
//     setCurrentProductIndex(index);
//     setModalImage(image);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setModalImage('');
//     clearInterval(slideshowIntervalRef.current);
//     setIsSlideshowActive(false);
//   };

//   const nextImage = (e) => {
//     e.stopPropagation();
//     const nextIndex = (currentProductIndex + 1) % productImages.length;
//     setCurrentProductIndex(nextIndex);
//     setModalImage(productImages[nextIndex]);
//   };

//   const prevImage = (e) => {
//     e.stopPropagation();
//     const prevIndex = (currentProductIndex - 1 + productImages.length) % productImages.length;
//     setCurrentProductIndex(prevIndex);
//     setModalImage(productImages[prevIndex]);
//   };

//   const toggleSlideshow = (e) => {
//     e.stopPropagation();
//     if (isSlideshowActive) {
//       clearInterval(slideshowIntervalRef.current);
//       setIsSlideshowActive(false);
//     } else {
//       slideshowIntervalRef.current = setInterval(() => {
//         nextImage(e);
//       }, 2000);
//       setIsSlideshowActive(true);
//     }
//   };

//   const currentProductNumber = currentProductIndex + 1;
//   const totalProducts = productImages.length;

//   return (
//     <div className="product-alloy-wrapper">
//       <div className="bg-image"></div>
//       <div className="bg-overlay"></div>
//       <div className="product-alloy-container">
//         <div className="left-section">
//           <img src={alloyLogo} alt="Alloy Logo" className="description-logo" />
//           <p>
//             Alloy is the leading Commercial Partitioning System Provider in Asia. Systems from Alloy partitioning are created to specifically address the requirements of office, banking, healthcare, and retail. ALLOY Partitioning Systems are engineered for speed and ease of installation. When installed properly, ALLOY provides a crisp and clean finish that accentuates the design space.
//           </p>
//           <p>ALLOY Partitioning Systems is a comprehensive and integrated system for glazed frame including door frame & door panel. There are a variety of designs to choose from, range of Flexible or relocatable systems for:</p>
//           <ul>
//             <li>Drywall Partitioning</li>
//             <li>Doorframe</li>
//             <li>Glazed frame Partitioning</li>
//             <li>Aluminium Skirting</li>
//           </ul>
//         </div>
//         <div className="right-section">
//           <div className="slideshow-section">
//             <div className="slideshow">
//               {images.map((image, index) => (
//                 <div
//                   key={index}
//                   className={`slide ${index === currentIndex ? 'active' : ''}`}
//                   style={{ backgroundImage: `url(${image})` }}
//                 ></div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="cards-container">
//         <div className="card">
//           <img src={customerServiceIcon} alt="Customer Service" />
//           <h3>Customer Service</h3>
//           <p>Customer service prioritizes client vision. Expert teams collaborate closely, understanding layout requirements, aesthetic preferences, and functionality needs. Responsive communication ensures seamless integration of ideas, resulting in tailored and satisfying partitioning solutions.</p>
//         </div>
//         <div className="card">
//           <img src={highAcousticIcon} alt="High Acoustic" />
//           <h3>High Acoustic</h3>
//           <p>Office partitionings acoustic properties greatly influence workplace comfort. Sound insulating products like acoustic glazed doors reduce noise levels, enhancing concentration and privacy. Well-designed partitions effectively control sound transmission, creating a productive and peaceful environment for employees to thrive in.</p>
//         </div>
//         <div className="card">
//           <img src={envFriendlyIcon} alt="Environmental Friendly" />
//           <h3>Environmental Friendly</h3>
//           <p>Manufacturing office partitioning with recyclable materials like aluminum and glass offers eco-friendly advantages. Reduced resource consumption, lower emissions, and prolonged product life contribute to a sustainable choice that minimizes environmental impact, aligning with responsible business practices. Our commitment to maintaining rigorous environmental standards and sustainable manufacturing processes.</p>
//         </div>
//         <div className="card">
//           <img src={sampleAndMockupIcon} alt="Sample and Mock-up Service" />
//           <h3>Sample and Mock-up Service</h3>
//           <p>Alloy can provide samples and mock-ups to customers for projects that want to see more installation and design images. These make your team understand with a clearer imagination about the product.</p>
//         </div>
//       </div>
//       <div className="product-grid">
//         {productImages.map((image, index) => (
//           <div
//             key={index}
//             className="product-item"
//             ref={el => productItemsRef.current[index] = el}
//             onClick={() => openModal(image, index)}
//           >
//             <img src={image} alt={`Product ${index + 1}`} />
//             <div className="overlay"></div>
//           </div>
//         ))}
//       </div>
//       <div className="see-more-box">
//         <a href="https://www.alloy-asia.com/product.php" target="_blank" rel="noopener noreferrer">
//           <div className="see-more-content">
//             <span>See More</span>
//           </div>
//         </a>
//       </div>
//       {isModalOpen && (
//         <div className="modal" onClick={closeModal}>
//           <span className="close" onClick={closeModal}>&times;</span>
//           <div className="modal-content-wrapper">
//             <img className="modal-content" src={modalImage} alt="Enlarged product" />
//           </div>
//           <div className="arrow left" onClick={prevImage}>&#10094;</div>
//           <div className="arrow right" onClick={nextImage}>&#10095;</div>
//           <div className="slideshow-controls" onClick={toggleSlideshow}>
//             {isSlideshowActive ? 'Stop Slideshow' : `${currentProductNumber}/${totalProducts}`}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// };

// export default ProductAlloy;




import React, { useEffect, useRef, useState } from 'react';
import './ProductAlloy.css';
import alloyss1 from '../../../assets/Alloy/alloyss1.jpg';
import alloyss2 from '../../../assets/Alloy/alloyss2.jpg';
import alloyss3 from '../../../assets/Alloy/alloyss3.jpg';
import alloyss4 from '../../../assets/Alloy/alloyss4.jpg';
import alloyss5 from '../../../assets/Alloy/alloyss5.jpg';
import alloyss6 from '../../../assets/Alloy/alloyss6.jpg';
import alloyLogo from '../../../assets/Alloy/alloy-logo.jpg';
import customerServiceIcon from '../../../assets/Alloy/customerserviceicon.png';
import highAcousticIcon from '../../../assets/Alloy/highacoustic.png';
import envFriendlyIcon from '../../../assets/Alloy/envfriendly.png';
import sampleAndMockupIcon from '../../../assets/Alloy/sampleandmockup.png';

import alloygrid1 from '../../../assets/Alloy/alloygrid1.jpg';
import alloygrid2 from '../../../assets/Alloy/alloygrid2.jpg';
import alloygrid3 from '../../../assets/Alloy/alloygrid3.jpg';
import alloygrid4 from '../../../assets/Alloy/alloygrid4.jpg';
import alloygrid5 from '../../../assets/Alloy/alloygrid5.jpg';
import alloygrid6 from '../../../assets/Alloy/alloygrid6.jpg';
import alloygrid7 from '../../../assets/Alloy/alloygrid7.jpg';
import alloygrid8 from '../../../assets/Alloy/alloygrid8.jpg';
import alloygrid9 from '../../../assets/Alloy/alloygrid9.jpg';
import alloygrid10 from '../../../assets/Alloy/alloygrid10.jpg';
import alloygrid11 from '../../../assets/Alloy/alloygrid11.jpg';
import alloygrid12 from '../../../assets/Alloy/alloygrid12.jpg';
import alloygrid13 from '../../../assets/Alloy/alloygrid13.jpg';
import alloygrid14 from '../../../assets/Alloy/alloygrid14.jpg';
import alloygrid15 from '../../../assets/Alloy/alloygrid15.jpg';
import alloygrid16 from '../../../assets/Alloy/alloygrid16.jpg';
import alloygrid17 from '../../../assets/Alloy/alloygrid17.jpg';
import alloygrid18 from '../../../assets/Alloy/alloygrid18.jpg';
import alloygrid19 from '../../../assets/Alloy/alloygrid19.jpg';
import alloygrid20 from '../../../assets/Alloy/alloygrid20.jpg';

const productImages = [
  alloygrid1, alloygrid2, alloygrid3, alloygrid4, alloygrid5, alloygrid6, alloygrid7, 
  alloygrid8, alloygrid9, alloygrid10, alloygrid11, alloygrid12, alloygrid13, 
  alloygrid14, alloygrid15, alloygrid16, alloygrid17, alloygrid18, alloygrid19, alloygrid20
];

const ProductAlloy = () => {
  const slideshowIntervalRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [isSlideshowActive, setIsSlideshowActive] = useState(false);
  const productItemsRef = useRef([]);

  const images = [alloyss1, alloyss2, alloyss3, alloyss4, alloyss5, alloyss6];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    productItemsRef.current.forEach(item => {
      if (item instanceof Element) {
        observer.observe(item);
      }
    });

    return () => {
      productItemsRef.current.forEach(item => {
        if (item instanceof Element) {
          observer.unobserve(item);
        }
      });
      productItemsRef.current = [];
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); // Change the interval time as needed

    return () => clearInterval(interval);
  }, [images.length]);

  const openModal = (image, index) => {
    setCurrentProductIndex(index);
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
    clearInterval(slideshowIntervalRef.current);
    setIsSlideshowActive(false);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const nextIndex = (currentProductIndex + 1) % productImages.length;
    setCurrentProductIndex(nextIndex);
    setModalImage(productImages[nextIndex]);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const prevIndex = (currentProductIndex - 1 + productImages.length) % productImages.length;
    setCurrentProductIndex(prevIndex);
    setModalImage(productImages[prevIndex]);
  };

  const toggleSlideshow = (e) => {
    e.stopPropagation();
    if (isSlideshowActive) {
      clearInterval(slideshowIntervalRef.current);
      setIsSlideshowActive(false);
    } else {
      slideshowIntervalRef.current = setInterval(() => {
        nextImage(e);
      }, 2000); // Change the interval time as needed
      setIsSlideshowActive(true);
    }
  };

  const currentProductNumber = currentProductIndex + 1;
  const totalProducts = productImages.length;

  return (
    <div className="product-alloy-wrapper">
      <div className="bg-image"></div>
      <div className="bg-overlay"></div>
      <div className="product-alloy-container">
        <div className="left-section">
          <img src={alloyLogo} alt="Alloy Logo" className="description-logo" />
          <p>
            Alloy is the leading Commercial Partitioning System Provider in Asia. Systems from Alloy partitioning are created to specifically address the requirements of office, banking, healthcare, and retail. ALLOY Partitioning Systems are engineered for speed and ease of installation. When installed properly, ALLOY provides a crisp and clean finish that accentuates the design space.
          </p>
          <p>ALLOY Partitioning Systems is a comprehensive and integrated system for glazed frame including door frame & door panel. There are a variety of designs to choose from, range of Flexible or relocatable systems for:</p>
          <ul>
            <li>Drywall Partitioning</li>
            <li>Doorframe</li>
            <li>Glazed frame Partitioning</li>
            <li>Aluminium Skirting</li>
          </ul>
        </div>
        <div className="right-section">
          <div className="slideshow-section">
            <div className="slideshow">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`slide ${index === currentIndex ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="cards-container">
        <div className="card">
          <img src={customerServiceIcon} alt="Customer Service" />
          <h3>Customer Service</h3>
          <p>Customer service prioritizes client vision. Expert teams collaborate closely, understanding layout requirements, aesthetic preferences, and functionality needs. Responsive communication ensures seamless integration of ideas, resulting in tailored and satisfying partitioning solutions.</p>
        </div>
        <div className="card">
          <img src={highAcousticIcon} alt="High Acoustic" />
          <h3>High Acoustic</h3>
          <p>Office partitionings acoustic properties greatly influence workplace comfort. Sound insulating products like acoustic glazed doors reduce noise levels, enhancing concentration and privacy. Well-designed partitions effectively control sound transmission, creating a productive and peaceful environment for employees to thrive in.</p>
        </div>
        <div className="card">
          <img src={envFriendlyIcon} alt="Environmental Friendly" />
          <h3>Environmental Friendly</h3>
          <p>Manufacturing office partitioning with recyclable materials like aluminum and glass offers eco-friendly advantages. Reduced resource consumption, lower emissions, and prolonged product life contribute to a sustainable choice that minimizes environmental impact, aligning with responsible business practices. Our commitment to maintaining rigorous environmental standards and sustainable manufacturing processes.</p>
        </div>
        <div className="card">
          <img src={sampleAndMockupIcon} alt="Sample and Mock-up Service" />
          <h3>Sample and Mock-up Service</h3>
          <p>Alloy can provide samples and mock-ups to customers for projects that want to see more installation and design images. These make your team understand with a clearer imagination about the product.</p>
        </div>
      </div>
      <div className="product-grid">
        {productImages.map((image, index) => (
          <div
            key={index}
            className="product-item"
            ref={el => productItemsRef.current[index] = el}
            onClick={() => openModal(image, index)}
          >
            <img src={image} alt={`Product ${index + 1}`} />
            <div className="overlay"></div>
          </div>
        ))}
      </div>
      <div className="see-more-box">
        <a href="https://www.alloy-asia.com/product.php" target="_blank" rel="noopener noreferrer">
          <div className="see-more-content">
            <span>See More</span>
          </div>
        </a>
      </div>
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>&times;</span>
          <div className="modal-content-wrapper">
            <img className="modal-content" src={modalImage} alt="Enlarged product" />
          </div>
          <div className="arrow left" onClick={prevImage}>&#10094;</div>
          <div className="arrow right" onClick={nextImage}>&#10095;</div>
          <div className="slideshow-controls" onClick={toggleSlideshow}>
            {isSlideshowActive ? 'Stop Slideshow' : `${currentProductNumber}/${totalProducts}`}
          </div>
        </div>
      )}
    </div>
  )
};

export default ProductAlloy;

