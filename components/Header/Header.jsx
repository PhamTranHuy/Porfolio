import React from 'react'
import Navigation from './Navigation/Navigation'

function Header() {
    return (
        <header className="layout-max-w flex-between">
            <div className='text-sm'><span className='text-2xl font-bold'>H</span>Myopic</div>
            <Navigation />
        </header>
    )
}

export default Header