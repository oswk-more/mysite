import React from "react"


const Home = () => {
  return (
  <div>
    
  <div className="relative w-full min-h-screen bg-cover bg-hero-pattern bg-center">
  <div class="scrolldown1"><span>Scroll</span></div>

  
  </div>
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