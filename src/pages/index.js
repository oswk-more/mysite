import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Home from "../components/home"
import Gallery from "../components/gallery"
import Blog from "../components/blog"
import Product from "../components/product"
import About from "../components/about"




const MainIndex = () => {
  return (
    <div className="bg-gradient-to-tr from-cyan-200 via-red-100 to-pink-200">
      
      <Header/>
      <div id="home"><Home/></div>
      <div id="about"><About/></div>
      <div id="gallery"><Gallery/></div>
      <div id="product"><Product/></div>
      <div id="blog"><Blog/></div>
      <Footer/>
      
 

 

  </div>
  )
}

export default MainIndex


