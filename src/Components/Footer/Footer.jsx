// import React from 'react'
// import { Link } from 'react-router-dom'
// import './Footer.css'
// import logo1 from '../../assets/Alloy/alloy-logo.jpg'

// import logo4 from '../../assets/furniture.png'
// import linkedin_icon from '../../assets/linked_in_logo.png'
// import { useLocation } from 'react-router-dom'


// const Footer = () => {

//     const location=useLocation();
    
    

//   return (
//      /* className={`${location.pathname === "/AdminLogin" ? "notactive" :""}`} */
//      <>
//     <div className={`footer container ${location.pathname == "/adminlogin" ? "notactive" :"" }`}>
        



//     <div className="footer-right">

//         <h3>Website developed and maintained by</h3>


//         <div className="developers">
//             <a href='https://www.linkedin.com/in/aakriti-mishra-0585a424a/' target="_blank" rel="noopener noreferrer">
//             <img src={linkedin_icon}/>
//             </a><div className="Aakriti_Mishra">
//             <a href='https://www.linkedin.com/in/aakriti-mishra-0585a424a/' target="_blank" rel="noopener noreferrer">
//             Aakriti Mishra</a></div>
//         </div>










//     </div>












//     </div>
//    {/*  <div className="rights-res ">All rights reserved</div> */}
//    <div className="rights-res">

//                 <p>&copy; WGS Interior Products Pvt Ltd. All rights reserved.</p>
//             </div>
//     </>
    
//   )
// }

// export default Footer
import React from 'react'
import './Footer.css'
import linkedin_icon from '../../assets/linkedin_logo.png'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()

  return (
    <>
      <div className={`footer ${location.pathname === "/adminlogin" ? "notactive" : ""}`}>
        <div className="footer-content">
          <span>Website developed and maintained by</span>
          <a
            href="https://www.linkedin.com/in/aakriti-mishra-0585a424a/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            <img src={linkedin_icon} alt="LinkedIn" />
            <span>Aakriti Mishra</span>
          </a>
        </div>
      </div>

      <div className="rights-res">
        <p>&copy; WGS Interior Products Pvt Ltd. All rights reserved.</p>
      </div>
    </>
  )
}

export default Footer
