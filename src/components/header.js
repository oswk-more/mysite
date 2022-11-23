import React from "react";
import Menu from "./menu";

const Header = () => {
  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '20px',
      height: '20px',
      right: '15px',
      top: '15px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: 'linear-gradient(to right, rgb(255, 228, 230 ,0), rgb(204, 241, 241, 0.5), rgb(204, 251, 241, 0.9), rgb(204, 251, 241))',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
  
  return(
  <div>
  <div className="md:hidden bg-transparent ">
  <Menu right width={"100%"} styles={ styles } customBurgerIcon={ <img src="/images/menu.png" /> }/> 
  </div>
  
  <nav className="fixed z-50 w-full">
    <div className="invisible md:visible justify-center p-6 mx-auto text-border-gray-700">
      <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-700  hover:border-gray-700 mx-1.5 sm:mx-6">home</a>
      <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-700  hover:border-gray-700 mx-1.5 sm:mx-6">gallery</a>
      <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-700  hover:border-gray-700 mx-1.5 sm:mx-6">product</a>
      <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-700  hover:border-gray-700 mx-1.5 sm:mx-6">about</a>
      <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-700  hover:border-gray-700 mx-1.5 sm:mx-6">blog</a>
      <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-700  hover:border-gray-700 mx-1.5 sm:mx-6">
      </a>
    </div>
  </nav>
  </div>
)
}

export default Header