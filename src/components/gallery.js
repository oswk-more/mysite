import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"


const Gallery = () => {
  const data = useStaticQuery(graphql`
query {
  file(relativePath: {eq: "NationalStadium.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 4608) {
        base64
        aspectRatio
        src
        srcWebp
        srcSetWebp
        sizes
      }
    }
  }
}
`)

  return (
  <div>
     <div className="bg-transparent py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
        





    {/* text - start  */}
    <div className="mb-10 md:mb-16">
      <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Gallery</h2>
      <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
    </div>
    {/* text - end */}
    <div className=" grid grid-cols-1 gap-16 sm:grid-cols-2 ">
      {/* image - start */}
      <a href="/galleryindex" className="group h-64 mx-10 md:h-full flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
        <Img fluid={data.file.childImageSharp.fluid} loading="lazy" alt="Photo by Minh Pham" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
        <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none" />
        
      </a>
      {/* image - end */}
      {/* image - start */}
      <a href="#" className="group h-64 mx-10 md:h-full flex justify-end items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative">
      <Img fluid={data.file.childImageSharp.fluid} alt="Photo by Lorenzo Herrera" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
        <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none" />
      </a>
      {/* image - end */}
      
    </div>
  </div></div>

  </div>
  )
}

export default Gallery

