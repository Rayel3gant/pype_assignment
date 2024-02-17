import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='w-3/4 mx-auto flex justify-between -mt-2 py-4 uppercase text-xl tracking-wide myText'>
        <NavLink to='/search' className='hover:scale-110 transition-all duration-1000'>Search</NavLink>
        <NavLink to='/details' className='hover:scale-110 transition-all duration-1000'>Details</NavLink>
        <NavLink to='/favourites' className='hover:scale-110 transition-all duration-1000'>Favourites</NavLink>
    </div>
  )
}

export default Menu