import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProductAlloy from './Pages/Products/ProductAlloy/ProductAlloy'
import Home from './Pages/Home/Home'
import ProductDurlum from './Pages/Products/ProductDurlum/ProductDurlum'
import ProductWedecor from './Pages/Products/ProductWedecor/ProductWedecor'
import ContactUs from './Pages/ContactUs/ContactUs'
import AboutUs from './Pages/About-Us/AboutUs'
import Projects from './Pages/Projects/Projects'
 

const Routes = () => {
  return (
    <Switch>
        <Route index element={<Home/>}/>
        <Route path="/Products/Alloy" element ={<ProductAlloy/>}/>
        <Route path="/Products/durlum" element ={<ProductDurlum/>}/>
        <Route path="/Products/Wedecor8" element ={<ProductWedecor/>}/>

        <Route path="/ContactUs" element ={<ContactUs/>}/>
        <Route path="/AboutUs" element ={<AboutUs/>}/>
        <Route path="/Projects" element ={<Projects/>}/>
    </Switch>
  )
}

export default Routes
