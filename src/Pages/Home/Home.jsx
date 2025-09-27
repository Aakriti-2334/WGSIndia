import React from "react";
/* import Navbar from "../../Components/Navbar/Navbar";
 */
import Slider_proj from "../../Components/Slider_proj/Slider_proj";
import Products from "../../Components/Products/Products";
import Title from "../../Components/Title/Title";
import About from "../../Components/About/About";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";


const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Slider_proj />
      <div className="container">
          {/* <Products /> */}
        {/* <Title subTitle="Products" title="What all we have" />
        <About /> */}
        <Title subTitle='Contact Us'title='Get in Touch'/>
        <Contact/>
        
      </div>
       {/*  <Footer/> */}
    </div>
  );
};

export default Home;