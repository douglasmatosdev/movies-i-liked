import React from 'react'
import { NavBar, Footer } from './components'

const App = () => {

    return (
        <div className="MIL_App">
            <NavBar />
            <div className="MIL_App-content">
                <h1>Movies i liked</h1>
                <button>
                    btn
                </button>

            </div>
            <Footer />
        </div>
    )
}

export default App
