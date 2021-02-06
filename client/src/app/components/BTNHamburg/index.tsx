import React from 'react'
import styled, { css } from 'styled-components'

interface Props {
    open?: boolean
    onClick?: () => void
}

export const BTNHamburg = ({ open, onClick }: Props) => {
    return (
        <BTNHamburgContainer onClick={onClick}>
            <IconHamburg open={open}>
                <IconHamburgItem className="IconHamburg_item" />
                <IconHamburgItem className="IconHamburg_item" />
                <IconHamburgItem className="IconHamburg_item" />
            </IconHamburg>
        </BTNHamburgContainer>
    )
}

const BTNHamburgContainer = styled.div`
    /* background: orange; */
    /* border: 1px solid orange; */
    width: 30px;
    height: 30px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;


`

const IconHamburgItem = styled.div`
    width: inherit;
    height: 4px;
    background-color: #fffc;
`
const IconHamburg = styled.div<Props>`
    /* border: 1px solid red; */

    width: inherit;
    height: inherit;

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    transform-style: preserve-3d;
  perspective: 30px;

    .IconHamburg_item {
        transition: transform 0.3s;
        perspective-origin: center center;
        ${props => props?.open
       
        ? css`
            &:nth-child(2) {
                display: none;
            }
            &:nth-child(1) {
            transform: rotate(45deg) translate(35%, 8px);
            
        }
        &:nth-child(3) {
            
            transform: rotate(-45deg) translate(35%, -8px);
        }
        ` :
        ''}
    }
`