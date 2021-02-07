import React from 'react'
import styled from 'styled-components'
import NavBar from './components/NavBar'

import { SideBar } from './components/SideBar'
import NavBarBottom from './components/NavBarBottom'

const App = () => {

    return (
        <AppContainer className="MIL_App">
            <NavBar />
            <SideBar />
            <NavBarBottom/>
        </AppContainer>
    )
}

export default App

const AppContainer = styled.div`
  

`
