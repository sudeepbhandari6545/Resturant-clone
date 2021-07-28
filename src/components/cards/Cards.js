import React from 'react'
//
import './Cards.css'

const Cards = ({ menuData }) => {
  return (
    <>
      <section className="menu_main_container">
        {menuData.map((curElem) => {
          return (
            <>
              <div className="card_container" key={curElem.id}>
                <div className="card">
                  <div className="card_body">
                    <span className="card_number card_circle">
                      {curElem.id}
                    </span>
                    <span className="card_author">{curElem.category}</span>
                    <h2 className="card_title">{curElem.name}</h2>
                    <span className="card_description">
                      {curElem.description}
                    </span>
                    <div className="card_read">Read</div>
                  </div>
                  <img
                    src={curElem.imageURL}
                    alt="image"
                    className="card_media"
                  />
                  <span className="card_tag">Order Now</span>
                </div>
              </div>
            </>
          )
        })}
      </section>
    </>
  )
}

export default Cards
