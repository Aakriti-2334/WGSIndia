// import React, { useEffect, useState } from 'react'
// import './Navbar.css'
// /* import logo from '../../assets/logo.png'
//  */import logo2 from'../../assets/logo2.png'
// import { useNavigate } from 'react-router-dom'


// import { Link } from 'react-router-dom'
// const Navbar = () => {

// /*   const [sticky,setSticky]= useState(false);
  
//   useEffect(()=>{
//     window.addEventListener('scroll',()=>{
//       window.scrollY >50 ? setSticky(true):setSticky(false);
//     })
//   },[])
//  */
    
//   const [menu,setMenu]=useState("Home");
//   const navigate=useNavigate();


//   return (
//     <nav className={'container nav-on-scroll '}>
//       <img src={/* `${sticky? logo2:logo2}` */logo2} alt="" className='logo'/>
//       <ul>
//        {/* <Link to='/'><li>Home</li></Link> 
//        <Link to='/'><li>Projects</li></Link> 
//        <Link to='/'> <li>About us</li></Link> 
//        <Link to='/'><li>Products</li></Link>  */}
        
//        <Link to='/'><li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li></Link>
//        <Link to='/ContactUs'><li onClick={()=>setMenu("Projects")} className={menu==="Projects"?"active":""}>Projects</li></Link>
//        <Link to='/AboutUs'><li onClick={()=>setMenu("About-Us")} className={menu==="About-Us"?"active":""}>About us</li></Link>
//        <Link to='/ProductAlloy'><li onClick={()=>setMenu("Products")} className={menu==="Products"?"active":""}>Products</li></Link>
        
//        <Link to='/ContactUs'><li><button onClick={()=>setMenu("ContactUs")} className={`btn ${menu==="ContactUs"?" activebtn":""}`}>Contact us</button></li></Link>
//       </ul>
//     </nav>
//   )
// }

// export default Navbar


// import React, { useEffect, useState } from 'react';
// import './Navbar.css';
// import logo2 from '../../assets/logo2.png';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// const Navbar = () => {
//   const [menu, setMenu] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const path = location.pathname;
//     if (path === '/') {
//       setMenu('Home');
//     } else if (path === '/ContactUs') {
//       setMenu('ContactUs');
//     } else if (path === '/AboutUs') {
//       setMenu('About-Us');
//     } else if (path === '/Products/Alloy') {
//       setMenu('Products');
//     }
//      else if (path === '/Products/Wedecor8') {
//       setMenu('Products');
//     }
//     else if (path === '/Products/durlum') {
//       setMenu('Products');
//     }
//     else if (path === '/ProductSky') {
//       setMenu('Products');
//     }
//   }, [location]);

//   return (
//     <nav className={'container nav-on-scroll '}>
//       <img src={logo2} alt="" className='logo'/>
//       <ul>
//         <Link to='/'><li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</li></Link>
        
//         {/* <Link to='/ProductAlloy'><li onClick={() => setMenu("Products")} className={menu === "Products" ? "active" : ""}>Products</li></Link> */}
// {/*         <Link to='/ProductAlloy'><li onClick={() => setMenu("Products")} className={menu === "Products" ? "active" : ""}>Products</li></Link>
//  */}       {/*  <li>Products
//   <ul className='subnav'>
//   <li>ProductAlloy</li>
//   <li>Wedecor</li>
//   <li>Robot2.O</li>
//   <li>sandesh</li>
  
//   </ul>
  
  
  
//   </li> */}




// <li /* onClick={() => setMenu("Products")} */ className={`dropdown ${menu === "Products" ? "active" : ""}`}>Products
//           <ul className='subnav'>
//             <Link to='/Products/Alloy'><li /* onClick={() => setMenu("Products")} */>Alloy</li></Link>
//             <Link to='/Products/durlum'><li /* onClick={() => setMenu("Products")} */>durlum</li></Link>
//             <Link to='/Products/Wedecor8'><li /* onClick={() => setMenu("Products") }*/>Wedecor8</li></Link>
//             <Link to='/ProductAxar'><li onClick={() => setMenu("ProductAxar")}>Axar</li></Link>
//           </ul>
//         </li>


//   <Link to='/Projects'><li onClick={() => setMenu("Projects")} className={menu === "Projects" ? "active" : ""}>Projects</li></Link>


//   <Link to='/AboutUs'><li onClick={() => setMenu("About-Us")} className={menu === "About-Us" ? "active" : ""}>AboutUs</li></Link>

//         <Link to='/ContactUs'><li onClick={() => setMenu("ContactUs")} className={menu === "ContactUs" ? "active" : ""}>ContactUs</li></Link>
// {/*         <Link to='/ContactUs'><li><button onClick={() => setMenu("ContactUs")} className={`btn ${menu === "ContactUs" ? "activebtn" : ""}`}>Contact us</button></li></Link>
//  */}     
 
 
//   </ul>





















  
//     </nav>
//   );
// }

// export default Navbar;





import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo2 from '../../assets/logo2.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setMenu('Home');
    } else if (path === '/ContactUs') {
      setMenu('ContactUs');
    } else if (path === '/AboutUs') {
      setMenu('About-Us');
    } else if (path.startsWith('/Products')) { // Simplify product paths
      setMenu('Products');
    } else if (path === '/Projects') {
      setMenu('Projects');
    }
  }, [location]);

  return (
    <nav className={'container nav-on-scroll '}>
      <Link to='/'><img src={logo2} alt="" className='logo'/></Link>
      <ul>
        <Link to='/'><li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""} >Home</li></Link>
        
        <li className={`dropdown ${menu === "Products" ? "active" : ""}`}>Products
          <ul className='subnav'>
            <Link to='/Products/Alloy'><li>Alloy</li></Link>
            <Link to='/Products/Furniture'><li>Furniture</li></Link> 
          </ul>
        </li>

        <Link to='/Projects'><li onClick={() => setMenu("Projects")} className={menu === "Projects" ? "active" : ""}>Projects</li></Link>
        <Link to='/AboutUs'><li onClick={() => setMenu("About-Us")} className={menu === "About-Us" ? "active" : ""} id="nav-about">AboutUs</li></Link>
        <Link to='/ContactUs'><li onClick={() => setMenu("ContactUs")} className={menu === "ContactUs" ? "active" : ""} id="nav-contact">ContactUs</li></Link>
      </ul>
    </nav>
  );
}

export default Navbar;
