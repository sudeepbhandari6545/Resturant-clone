import React, { useState } from 'react'
import Menu from './cards/menuApi'
import Cards from './cards/Cards'

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu)

  return (
    <>
      <Cards menuData={menuData} />
    </>
  )
}

export default Resturant
