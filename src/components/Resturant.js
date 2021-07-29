import React, { useState } from 'react'
import Menu from './cards/menuApi'
import Cards from './cards/Cards'

import './Navbar.css'

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu)

  return (
    <>
      <nav className="navbar">
        <div className="btn_group">
          <button className="btn_group_item">Breakfast</button>
          <button className="btn_group_item">Lunch</button>
          <button className="btn_group_item">Evening</button>
          <button className="btn_group_item">Dinner</button>
          <button className="btn_group_item">All</button>
        </div>
      </nav>
      <Cards menuData={menuData} />
    </>
  )
}

export default Resturant
