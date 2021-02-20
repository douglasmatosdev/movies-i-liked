import React from 'react'
import styled from 'styled-components'
import NavBar from './components/NavBar'

import { SideBar } from './components/SideBar'
import NavBarBottom from './components/NavBarBottom'
import Registration from './components/Registration'

import {useSelector} from 'react-redux'

const App = () => {
    const register = useSelector(state => state.register)

    return (
        <AppContainer className="MIL_App">
            <NavBar />
            <SideBar />
            {register ? <Registration /> : null}
            <NavBarBottom/>
        </AppContainer>
    )
}

export default App

const AppContainer = styled.div`
  

`
