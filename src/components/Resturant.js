import React, { useState } from 'react'
import Menu from './cards/menuApi'
import Cards from './cards/Cards'
import Navbar from './Navbar'

import './Navbar.css'

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category
    }),
  ),
  'All',
]
console.log(uniqueList)

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu)
  const [menuList, setMenuList] = useState(uniqueList)

  const filterItem = (category) => {
    if (category === 'All') {
      setMenuData(Menu)
      return
    }
    const updateList = Menu.filter((curElem) => {
      return curElem.category === category
    })
    setMenuData(updateList)
  }

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <Cards menuData={menuData} />
    </>
  )
}

export default Resturant
