import React from 'react'
import styled from 'styled-components'
import netflixLogo from '../../../assets/images/logo-netflix.png'


export const HeaderBanner = () => {
    return (
        <HeaderBannerContainer>
            <img src={netflixLogo} alt=""/>
        </HeaderBannerContainer>
    )
}

const HeaderBannerContainer = styled.div`

    width:  100%;
    background: #000;

    display: flex;
    justify-content: center;
    align-items: center;

    
`