import React from 'react'

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn_group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn_group_item"
                onClick={() => filterItem(curElem)}
              >
                {curElem}
              </button>
            )
          })}
          {/* <button className="btn_group_item" onClick={() => setMenuData(Menu)}>
            All
          </button> */}
        </div>
      </nav>
    </>
  )
}

export default Navbar
