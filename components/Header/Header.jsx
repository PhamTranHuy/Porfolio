import React from 'react'
import Navigation from './Navigation/Navigation'

function Header() {
    return (
        <header className="layout-max-w flex-between">
            <div>logo</div>
            <Navigation />
        </header>
    )
}

export default Header