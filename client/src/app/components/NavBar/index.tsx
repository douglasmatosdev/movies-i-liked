import React from 'react'
import styled, { css } from 'styled-components'
import './NavBar.scss'
import mil from '../../../assets/images/mil.png'
import { BTNHamburg } from '../BTNHamburg'
import { InputSearch } from '../InputSearch'

import slider from '../../../store/SideBar/actions'
import { useSelector, useDispatch } from 'react-redux'

const NavBar = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    
    const dispatch = useDispatch()
    const result = useSelector(state => state.sidebar)
    // console.log(result);

    const hanlerClick = () => {
        setIsOpen(!isOpen)
        dispatch(slider(!isOpen))
    }

    return (
        <nav className="MIL_Navbar-navbar">
            <BTNHamburg open={isOpen} onClick={hanlerClick} />
            <Brand img={mil} />
            <InputSearch placeholder='Search...' />
        </nav>
    )
}
/*
* OLD METHOD
*
    const mapStateToProps = (state, ownProps) => {
        return {
            prop: state.sidebar
        }
    }
    export default connect(mapStateToProps)(NavBar)
*/
export default NavBar

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
