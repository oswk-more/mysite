import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { stack as Menu } from "react-burger-menu"

//ハンバーガーメニューのコンポーネント//

export default props => {

  return (
    <Menu {...props} >
      
      <AnchorLink href='#home' className="border-b-2 border-transparent hover:text-cyan-200 transition-colors duration-700  mx-1">home</AnchorLink>
      <br/>
      <AnchorLink href='#about' className="border-b-2 border-transparent hover:text-cyan-200 transition-colors duration-700  mx-1">about</AnchorLink>
      <br/>
      <AnchorLink href='#gallery' className="border-b-2 border-transparent hover:text-pink-300 transition-colors duration-700  mx-1">gallery</AnchorLink>
      <br/>
      <AnchorLink href='#product' className="border-b-2 border-transparent hover:text-cyan-200 transition-colors duration-700  mx-1">product</AnchorLink>
      <br/>
      <AnchorLink href='#blog' className="border-b-2 border-transparent hover:text-pink-300 transition-colors duration-700  mx-1">blog</AnchorLink>
      <br/>
      
      {/*<Link to="/page-2" className="menu-item text-gray-400 ml-52 pb-4" >
        ページ2
  </Link>*/}
    
    </Menu>
  )
}
