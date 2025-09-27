import React from 'react'
import './About.css'
import logo from '../../assets/logo.png'
const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={logo} alt="" className='about-img'/>
      </div>
      <div className="about-right">
        <h3>About us</h3>
        <h2>WGS Interior Products Pvt. Ltd.</h2>
        <br/>
        <p>WGS Interior Products Pvt. Ltd. is a young brand born in 2022, our vision is to enrich lives through innovative and elegant interior products. We aim to create spaces that inspire, rejuvenate, and enhance the overall well-being of individuals. Through our products, we aspire to leave a lasting impression on every space we touch. We provide customised solutions to our customers across a variety of spaces. We never compromise on the quality of our products and ensure they stand the test of time. Timely delivery is paramount to us, and we take utmost care in ensuring your orders reach you on schedule</p>
        <p>We take great pride in seeing your spaces come alive with our products and contributing to spaces that inspire and captivate. Our desire is to build lasting relationships with our customers by offering exceptional products and services that create a positive impact on your living or working spaces.</p>
      </div>
    </div>
  )
}

export default About
