import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

//商品紹介のブロック//

const Product = () => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: {eq: "TokyoGovernment.jpg"}) {
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
  <div>
  <Img fluid={data.file.childImageSharp.fluid}  alt="Photo by Minh Pham" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
  </div>
  )
}

export default Product


