import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className="header-content">
            <h2>Choose  items from here</h2>
            <p>Choose a list of items that you want them to be delivered</p>

            <button>View Items</button>
        </div>

    </div>
  )
}

export default Header