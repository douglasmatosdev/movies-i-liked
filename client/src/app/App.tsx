import React from 'react'
import { NavBar, Footer } from './components'
import { HeaderBanner } from './components/HeaderBanner'
import { AppGrid } from './components/AppGrid'
import { SideBar } from './components/SideBar'

const App = () => {
    const [state, setState] = React.useState([])

    return (
        <div className="MIL_App">
            <NavBar />
            <HeaderBanner />
            <AppGrid />
            <SideBar />
        </div>
    )
}

export default App
