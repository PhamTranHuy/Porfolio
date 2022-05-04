import React from 'react'
import Navigation from './Navigation/Navigation'

function Header() {
    return (
        <header className="
            absolute top-0 inset-x-0 z-50 
            border-b border-[#ffffff1a]
            bg-transparent">
            <div className='layout-max-w flex-between '>
                <div className='text-sm'><span className='text-2xl font-bold'>H</span>Myopic</div>
                <Navigation />
            </div>
        </header>
    )
}

export default Header