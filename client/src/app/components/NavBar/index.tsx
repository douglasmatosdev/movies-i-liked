import React from 'react'
import styled, { css } from 'styled-components'

import mil from '../../../assets/images/mil.png'
import { BTNHamburg } from '../BTNHamburg'
import { InputSearch } from '../InputSearch'

import slider from '../../../redux/sideBar/actions'
import { useSelector, useDispatch } from 'react-redux'

const NavBar = () => {
    const dispatch = useDispatch()
    const isOpen = useSelector(state => state.sidebar)
    
    const hanlerClick = () => dispatch(slider(!isOpen))

    return (
        <NavBarContainer className="MIL_Navbar-navbar">
            <BTNHamburg open={isOpen} onClick={hanlerClick} />
            <Brand img={mil} />
            <InputSearch placeholder='Search...' />
        </NavBarContainer>
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

const NavBarContainer = styled.div`
    padding: 16px;

    background: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
    color: ${props => props.theme.PRIMARY_TEXT_COLOR};
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    z-index: 100;
`

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
`
