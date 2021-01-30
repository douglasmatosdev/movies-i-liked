import React from 'react'
import './NavBar.scss'

import { BTNHamburg } from '../BTNHamburg'
import { InputSearch } from '../InputSearch'

export const NavBar = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const hanlerClick = () => {
        setIsOpen(!isOpen)
        console.log("click ", isOpen)
    }

    return (
        <nav className="MIL_Navbar-navbar">
            <BTNHamburg open={isOpen} onClick={hanlerClick} />
            <InputSearch placeholder='Search...' />
        </nav>
    )
}
