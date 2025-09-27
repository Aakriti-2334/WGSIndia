/* import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Slider_proj from "./Components/Slider_proj/Slider_proj";
import Products from "./Components/Products/Products";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";


const App = () => {
  return (
    <div>
      <Navbar />
      <Slider_proj />
      <div className="container">
        <Title subTitle="Product" title="What all we have" />
        <Products />
        <About />
        <Title subTitle='Contact Us'title='Get in Touch'/>
        <Contact/>
        
      </div>
        <Footer/>
    </div>
  );
  }; 
  export default App
  */
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import React from 'react'
// import Home from './Pages/Home/Home';
// import ProductAlloy from './Pages/Products/ProductAlloy/ProductAlloy';
// import ContactUs from './Pages/ContactUs/ContactUs';
// import Navbar from './Components/Navbar/Navbar';
// import AboutUs from './Pages/About-Us/AboutUs';
// import Projects from './Pages/Projects/Projects';
// import Footer from './Components/Footer/Footer';
// import ProductDurlum from './Pages/Products/ProductDurlum/ProductDurlum';
// import ProductWedecor from './Pages/Products/ProductWedecor/ProductWedecor';



// const App = () => {
//   return (
//     <div>


//       <BrowserRouter>
//       <Navbar/>
//       <Routes>
//         <Route index element={<Home/>}/>
// {/*         <Route path="/" element ={<Home/>}/>
//  */}        <Route path="/Products/Alloy" element ={<ProductAlloy/>}/>
//         <Route path="/Products/durlum" element ={<ProductDurlum/>}/>
//         <Route path="/Products/Wedecor8" element ={<ProductWedecor/>}/>

//         <Route path="/ContactUs" element ={<ContactUs/>}/>
//         <Route path="/AboutUs" element ={<AboutUs/>}/>
//         <Route path="/Projects" element ={<Projects/>}/>
//       </Routes>
//       </BrowserRouter>

//       <Footer/>

//       {/* <Home/> */}
//     </div>
//   )
// }



// export default App;


import { BrowserRouter, Routes, Route,useLocation } from 'react-router-dom';
import React from 'react'
import Home from './Pages/Home/Home';
import ProductAlloy from './Pages/Products/ProductAlloy/ProductAlloy';
import ContactUs from './Pages/ContactUs/ContactUs';
import Navbar from './Components/Navbar/Navbar';
import AboutUs from './Pages/About-Us/AboutUs';
import Projects from './Pages/Projects/Projects';
import Footer from './Components/Footer/Footer';
import Productfurniture from './Pages/Products/ProductFurniture/Productfurniture';
import NoPage from './Pages/NoPage/NoPage';
import AdminLogin from './Pages/AdminLogin/AdminLogin';

const App = () => {
  const location=useLocation();
  
  console.log(location.pathname);
  var varPath=location.pathname==='/AdminLogin';
  return (
    <div className='app'>
      
       <Navbar/>
        
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/Products/Alloy" element={<ProductAlloy/>}/>
          <Route path="/Products/Furniture" element={<Productfurniture/>}/> {/* Add this route */}
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/adminlogin" element={<AdminLogin/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Routes>
      
      <Footer/>
    </div>
  )
}

export default App;
