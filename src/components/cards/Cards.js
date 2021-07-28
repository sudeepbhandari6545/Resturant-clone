import React from 'react'
//
import './Cards.css'

const Cards = () => {
  return (
    <>
      <div className="card_container">
        <div className="card">
          <div className="card_body">
            <span className="card_number card_circle">1</span>
            <span className="card_author">Breakfast</span>
            <h2 className="card_title">Maggi</h2>
            <span className="card_description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              impedit, sed magnam quisquam officia aliquid, exercitationem ullam
              autem distinctio labore esse voluptas minima obcaecati
              praesentium.
            </span>
            <div className="card_read">Read</div>
          </div>
          <img
            src="https://www.seekpng.com/png/full/583-5832760_maggi-2-minutes-noodles-curry-maggi-noodles-saudi.png"
            alt="image"
          />
          <span className="card_tag">Order Now</span>
        </div>
      </div>
    </>
  )
}

export default Cards
