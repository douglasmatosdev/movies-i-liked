import React from 'react'
import styled, { css } from 'styled-components'

const NavBarBottom = () => {
    return (
        <NavBarBottomContainer>
            <span>
                <i className="fas fa-home"></i>
            </span>
            <span>
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

    background: #555;
    color: #fff;
    position: absolute;
    bottom: 0;

    font-size: 16px;

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;

        .fa-home,
        .fa-plus-circle,
        .fa-film {
            width: 80%;
            height: 80%;
        }
    }

`
