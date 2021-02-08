import React from 'react'
import styled, { css } from 'styled-components'

import { useSelector, useDispatch } from 'react-redux'
import { registrationAction } from '../../../redux/registration/action'

const NavBarBottom = () => {
    const register = useSelector(state => state.register)
    const dispatch = useDispatch()

    console.log(register)

    return (
        <NavBarBottomContainer>
            <span>
                <i className="fas fa-home"></i>
            </span>
            <span onClick={() => dispatch(registrationAction(!register))}>
                <i className="fas fa-plus-circle"></i>
            </span>
            <span>
                <i className="fas fa-film"></i>
            </span>
        </NavBarBottomContainer>
    )
}

export default NavBarBottom

const NavBarBottomContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    background: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
    color: ${props => props.theme.PRIMARY_TEXT_COLOR};
    position: absolute;
    bottom: 0;

    font-size: 16px;

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        cursor: pointer;

        .fa-home,
        .fa-plus-circle,
        .fa-film {
            width: 80%;
            height: 80%;
        }
    }

`
