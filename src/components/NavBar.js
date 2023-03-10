import React from 'react'
import {FaCoins} from 'react-icons/fa'
import { Link } from 'react-router-dom'

//Navbar
function NavBar() {
    return (
        <Link to='/'>
            <div className='flex justify-center text-center mt-10'>
                <FaCoins className='text-4xl text-orange-400 mx-2'/>
                <h1 className='text-xl'> Liiska <span className='bg-orange text-center text-xl'> Coin Viewer </span></h1>
            </div>
        </Link>
        
    )
}

export default NavBar
