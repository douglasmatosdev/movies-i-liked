import React from 'react'
import styled, { css } from 'styled-components'
import './NavBar.scss'
import mil from '../../../assets/images/mil.png'
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
            <Brand img={mil} />
            <InputSearch placeholder='Search...' />
        </nav>
    )
}

const Brand = styled.div`
    margin: 0;
    padding: 0;
    width: 20%;
    min-height: 40px;
    height: 100%;
    background-image: url(${props => props?.img});
    background-repeat: no-repeat;
    background-size: contain;
    background-position:  50% 50%;
    /* border: 1px solid red; */
`
