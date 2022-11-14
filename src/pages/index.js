import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({date}) => {
  return (
    <div>
    <Header />
    
  <section className="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
  <div className="container px-6 py-8 mx-auto">
    <h2 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white"></h2>
    <div className="grid gap-8 mt-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
      <div className="w-full max-w-s text-center">
        <img className="object-cover object-center w-full h-900 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80" alt="avatar" />
        <div className="mt-2">
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Ahmed Omer</h3>
          <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">CEO</span>
        </div>
      </div>
    </div>
  </div>
</section>
    <Footer />
    </div>

  )
}
