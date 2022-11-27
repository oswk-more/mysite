import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Home from "../components/home"
import Gallery from "../components/gallery"
import Blog from "../components/blog"


const MainIndex = ({ data }) => {
  return (
    <div className="bg-gradient-to-tr from-cyan-200 via-red-100 to-pink-200">
      <Header/>
      <Home/>
      <Gallery/>
      <Blog/>
      <Footer/>
  </div>
  )
}

export default MainIndex


