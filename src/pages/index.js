import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"



export default ({}) => {
  return (
    <div className="w-full h-screen snap overflow-y-auto scrolling-touch">
      <section
        id="section1"
        className="w-full h-screen snap-start flex justify-center items-center bg-gradient-to-br from-pink-300 via-indigo-200 to-blue-300 text-5xl text-white"
      >
        Section1
      </section>
      <section
        id="section2"
        className="w-full h-screen snap-start flex justify-center items-center bg-gradient-to-tr from-yellow-200 via-indigo-200 to-blue-300 to-text-5xl text-white"
      >
        Section2
      </section>
      <section
        id="section3"
        className="w-full h-screen snap-start  bg-gradient-to-br from-yellow-200 via-indigo-200 to-purple-300"
      >
        <Footer />
      </section>

      <header className="fixed top-0">
        <Header />
      </header>
</div>
  )
}
