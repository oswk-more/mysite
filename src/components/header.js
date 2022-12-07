import React from "react"
import Menu from "./menu"
import AnchorLink from 'react-anchor-link-smooth-scroll'

//ヘッダーのブロック//

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
      background: 'conic-gradient(at center bottom, rgb(165, 233, 233, 1), rgb(165, 233, 233, 1), rgb(165, 233, 233, 0.5))',//'linear-gradient(to right, rgb(255, 228, 230 ,0), rgb(204, 241, 241, 0.5), rgb(204, 251, 241, 0.9), rgb(204, 251, 241))',//
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
      display: 'inline-block',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

  
  
  return(
  <div className="fixed z-50 w-full bg-gray-500/[0.0]">
  <div className="md:hidden bg-transparent ">
  <Menu right width={"70%"} styles={ styles } customBurgerIcon={ <img src="/images/menu.png"/> }/> 
  </div>
  <div className="md:invisible justify-center tracking-wide p-5 mx-10  text-gray-100 text-xl float-left">SOU TOJO</div>
 
  <nav>
    <div className="invisible md:visible justify-center p-6 mx-auto text-gray-100 text-xl  float-right">
      <AnchorLink href='#home' className="border-b-2 border-transparent hover:text-cyan-200 transition-colors duration-700  mx-1.5 sm:mx-6">Home</AnchorLink>
      <AnchorLink href='#about' className="border-b-2 border-transparent hover:text-cyan-200 transition-colors duration-700  mx-1.5 sm:mx-6">About</AnchorLink>
      <AnchorLink href='#gallery' className="border-b-2 border-transparent hover:text-pink-300 transition-colors duration-700  mx-1.5 sm:mx-6">Gallery</AnchorLink>
      <AnchorLink href='#product' className="border-b-2 border-transparent hover:text-cyan-200 transition-colors duration-700  mx-1.5 sm:mx-6">Product</AnchorLink>
      <AnchorLink href='#blog' className="border-b-2 border-transparent hover:text-pink-300 transition-colors duration-700  mx-1.5 sm:mx-6">Blog</AnchorLink>
    </div>
  </nav>
  </div>
)
}

export default Header