import React from "react"
import { Link } from "gatsby"
import { stack as Menu } from "react-burger-menu"

export default props => {

  return (
    <Menu {...props} >
      <Link to="/" className="menu-item text-gray-400 float-right " >
        ホームページ
      </Link>
      <br/>
      
      <Link to="/page-2" className="menu-item text-gray-400 float-right" >
        ページ2
      </Link>
      <br/>

      <Link to="/page-3" className="menu-item text-gray-400 float-right" >
        ページ3
      </Link>
      <br/>

      <Link to="/page-4" className="menu-item text-gray-400 float-right" >
        ページ4
      </Link>
    </Menu>
  )
}
