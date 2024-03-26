import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className='px-24 py-3 border-b-2 bg-gray-900 flex items-center'>
            <div className='w-2/12'>
                <NavLink to={"/"}>
                    <h5 className='text-3xl font-bold text-white family1'>I Movies</h5>
                </NavLink>
            </div>
            <div className='w-8/12 flex items-center justify-center'>
                <input type="text" className='bg-transparent text-white border-2 rounded-full px-5 py-2 w-10/12' placeholder='Search Movies...' />
            </div>
            <div className='w-2/12 flex justify-end'>
                <NavLink to="/add" className="text-white font-bold rounded-l-full bg-amber-500 px-5 py-2">
                    Add
                </NavLink>
                <NavLink to="/viewall" className="text-white font-bold rounded-r-full bg-rose-500 px-5 py-2">
                    View
                </NavLink>
            </div>
        </header>
    )
}

export default Header