import React from "react";

//ブログのブロック//

const Blog = () => {
  return (
    <div class="bg-transparent py-6 sm:py-8 lg:py-12">
  <div class="relative w-full min-h-screen bg-cover px-4 md:px-8 mx-auto">
  {/* text - start */}
    <div class="mb-10 md:mb-16">
      <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Blog</h2>

      <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
    </div>
  {/* text - end */}

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
    {/* article - start */}
      <a href="#" class="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
        <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

        <div class="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

        <div class="relative p-4 mt-auto">
          <span class="block text-gray-200 text-sm">July 19, 2021</span>
          <h2 class="text-white text-xl font-semibold transition duration-100 mb-2">New trends in Tech</h2>

          <span class="text-indigo-300 font-semibold">Read more</span>
        </div>
      </a>
    {/* article - end */}

    {/* article - start */}
      <a href="#" class="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
        <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

        <div class="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

        <div class="relative p-4 mt-auto">
          <span class="block text-gray-200 text-sm">April 07, 2021</span>
          <h2 class="text-white text-xl font-semibold transition duration-100 mb-2">Working with legacy stacks</h2>

          <span class="text-indigo-300 font-semibold">Read more</span>
        </div>
      </a>
    {/* article - end */}

    {/* article - start */}
      <a href="#" class="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
        <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Magicle" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

        <div class="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

        <div class="relative p-4 mt-auto">
          <span class="block text-gray-200 text-sm">March 15, 2021</span>
          <h2 class="text-white text-xl font-semibold transition duration-100 mb-2">10 best smartphones for devs</h2>

          <span class="text-indigo-300 font-semibold">Read more</span>
        </div>
      </a>
    {/* article - end */}

    {/* article - start */}
      <a href="#" class="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
        <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Martin Sanchez" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

        <div class="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

        <div class="relative p-4 mt-auto">
          <span class="block text-gray-200 text-sm">January 27, 2021</span>
          <h2 class="text-white text-xl font-semibold transition duration-100 mb-2">8 High performance Notebooks</h2>

          <span class="text-indigo-300 font-semibold">Read more</span>
        </div>
      </a>
    {/* article - end */}

    {/* article - start */}
    <a href="#" class="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
        <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Martin Sanchez" class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

        <div class="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"></div>

        <div class="relative p-4 mt-auto">
          <span class="block text-gray-200 text-sm">January 27, 2021</span>
          <h2 class="text-white text-xl font-semibold transition duration-100 mb-2">8 High performance Notebooks</h2>

          <span class="text-indigo-300 font-semibold">Read more</span>
        </div>
      </a>
    {/* article - end */}
    </div>
  </div>
</div>

 
  )
}

export default Blog