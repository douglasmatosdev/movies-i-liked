import React from 'react'
import NavBar from './components/NavBar'
import { Footer } from './components'
import { HeaderBanner } from './components/HeaderBanner'
import { AppGrid } from './components/AppGrid'
import { SideBar } from './components/SideBar'
import NavBarBottom from './components/NavBarBottom'

const App = () => {
    const [state, setState] = React.useState([])

    return (
        <div className="MIL_App">
            <NavBar />
            {/* <HeaderBanner /> */}
            {/* <AppGrid /> */}
            <SideBar />
            <NavBarBottom/>
        </div>
    )
}

export default App
