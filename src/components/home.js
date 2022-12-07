import React from "react"
import { graphql } from "gatsby"

//ホームのコンポーネント//

const Home = () => {
  return (
  <div className="table w-full min-h-screen bg-cover bg-hero-pattern bg-center">
  <div className="table-cell align-middle text-center flinline-block whitespace-nowrap text-center text-gray-100 text-4xl md:text-8xl ">SOU&ensp;TOJO</div>
  <div class="scrolldown1"><span>Scroll</span></div>
  </div>
 
  )
}

export default Home

export const query = graphql`
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
`