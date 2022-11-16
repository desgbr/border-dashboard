import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { HiMenuAlt1 } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'
const Navbar = ({toggle, show}) => {
  return (
    <div className='nav-bar' onClick={toggle}>
      <div className="toggle-sidebar">
        {show ? <MdClose/> : <HiMenuAlt1/>}
      </div>
      <div className="search">
        <input type="text" placeholder='Search...' />
        <span className="icon"><FaSearch /></span>
      </div>
      <div className="user-settings">
        <h5 className='m-0'>Ahmed Gabr</h5>
        <img src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="user" />
      </div>
    </div>
  )
}

export default Navbar