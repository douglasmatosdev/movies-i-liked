import React from 'react'
import styled, { css } from 'styled-components'

interface Props {
    open?: boolean
    onClick?: () => void
}

export const BTNHamburg = ({ open, onClick }: Props) => {
    return (
        <BTNHamburgContainer onClick={onClick}>
            <IconHamburg open={open} />
        </BTNHamburgContainer>
    )
}

const BTNHamburgContainer = styled.div`
    /* background: orange; */
    /* border: 1px solid orange; */
    width: 40px;
    height: 40px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;


`
const IconHamburg = styled.div<Props>`
    width: 100%;
    min-height: 6px;
    background: ${({ open }) => open ? css`transparent` : css`#fff`};
    position: relative;
    transition: ease-in-out 0.3s;

    &::before {
        content: '';
        width: 100%;
        min-height: 6px;
        background: #fff;

        position: absolute;
        top: -16px;
        left: 0;

        ${({ open }) => open ? css`
        transform-style: preserve-3d;
        transform: rotate(45deg);
        transform-origin: 2% 150%;
            z-index: 10;
            transition: transform 0.3s linear;

        ` : ''}

    }

    &::after {
        content: '';
        width: 100%;
        min-height: 6px;
        background: #fff;

        position: absolute;
        top: 16px;
        left: 0;

        ${({ open }) => open ? css`
        transform-style: preserve-3d;
        transform: rotate(-45deg);
        transform-origin: 2% -60%;
            z-index: 10;
            transition: transform 0.3s linear;

        ` : ''}
    }
`