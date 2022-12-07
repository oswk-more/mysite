import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

//aboutのブロック//

const About = () => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: {eq: "about.jpg"}) {
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
  `
)
  return (


  <div className="w-full min-h-screen max-w-screen-2xl bg-cover bg-transparent py-6">
    <div className="text-gray-800 mt-12 md:pt-12 lg:text-lg font-semibold text-center md:mb-16">
      <p>ABOUT</p>
    </div>
    <div className="md:flex">
      <Img fluid={data.file.childImageSharp.fluid} loading="lazy" alt="Photo by Minh Pham" className="group h-64 m-16 md:h-128 md:w-128 md:mt-36 md:ml-36 rounded-lg shadow-lg overflow-hidden relative" />
    {/* text - start */}
    <div className="px-12">
      <h2 className="text-gray-800 text-base  pb-8 md:pt-32">SOU&ensp;TOJO</h2>
      <p className="max-w-screen-md text-gray-500 text-xs leading-6">1997年生まれ。フォトグラファー<br/>独学で撮影を学ぶ<br/>主に赤外線カメラを用いて日常写真を撮影し発表<br/></p>
      <p className="max-w-screen-md text-gray-500 text-xs mt-8 leading-6">Born in 1997. photographer<br/>self-taught photography<br/>Mainly use an infrared camera to take everyday photographs and present them<br/>He is also familiar with wed design and is active in multiple</p>
      <h2 className="text-gray-700 text-base  pb-8 pt-12 md:pt-24">赤外線写真とは</h2>
      <p className="max-w-screen-md text-gray-500 text-xs leading-6">可視光線より波長が長く、人間の目には見えない近赤外線で写した写真。<br/> 目で見ている世界が全てでなないこと写真で再認識することができる。</p>
      <p className="max-w-screen-md text-gray-500 text-xs mt-8 leading-6">A photograph taken with near-infrared light, which has a longer wavelength than visible light and is invisible to the human eye.<br/>Photographs remind us that the world we see with our eyes is not everything.</p>
    </div>
    {/* text - end */}
    </div>
  </div>

  )
}

export default About


