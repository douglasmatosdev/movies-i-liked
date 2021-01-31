import React from 'react'
import styled, { css } from 'styled-components'
import userAvatar from '../../../assets/images/avatar.jpeg'

interface Props {
    open?: boolean
}

export const SideBar = ({ open }: Props) => {
    return (
        <MILSideBarContainer open={open}>
            <MILSideBarHeader>
                <div className="SideBar_header-user">
                    <div className="SideBar_Avatar">
                        <img src={userAvatar} alt="avatar" />
                    </div>
                    <div className="SideBar_Name">
                        <h2>Douglas Matos da Silva</h2>
                    </div>
                </div>
            </MILSideBarHeader>
            <MILSideBarSettings>
                <div className="SideBarSettings_Item">
                    <a href={`#`}>Account</a>
                </div>
                <div className="SideBarSettings_Item">
                    <a href={`#`}>Add Movie</a>
                </div>
                <div className="SideBarSettings_Item">
                    <a href={`#`}>About</a>
                </div>
                <div className="SideBarSettings_Item">
                    <a href={`#`}>Contact</a>
                </div>
            </MILSideBarSettings>
        </MILSideBarContainer>
    )
}

const MILSideBarSettings = styled.div`
    width: inherit;
    height: 100px;

    padding: 6px 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
   
    .SideBarSettings_Item a {
        cursor: pointer;
        font-size: 18px;
        color: #fff7;
        text-decoration: none;
        list-style: none;
    }


`
const MILSideBarHeader = styled.div`
    &,
    * {
        margin: 0;
        padding: 0;
    }
    width: inherit;
    height: 40px;

    .SideBar_header-user {
        width: inherit;
        height: 100%;

        display: flex;
        justify-content: flex-start;
        align-items: center;

        .SideBar_Avatar { 
            width: 32px;
            height: 32px;
            margin-right: 8px;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }    
`

const MILSideBarContainer = styled.div<Props>`
    width: 250px;
    min-height: 100vh;
    height: 100%;
    z-index: 500;
    transition: left .5s;

    overflow-y: scroll;
    --webkit-overflow-scrolling: touch;

    margin: 0;
    padding: 16px;

    position: absolute;
    top: 70px;
    ${props => props?.open ? css`left: 0;` : css`left: -99999px;`};

    background-color: #222;
    color: #fff7;
    font-size: 11px;
    font-family: sans-serif;
`