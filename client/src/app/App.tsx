import React from 'react'
import Services from '../../src/services/fetch'
import { NavBar, Footer } from './components'
import { HeaderBanner } from './components/HeaderBanner'
import './App.scss'

const App = () => {
    const [state, setState] = React.useState([])
    const movies = Services.getMovies()

    React.useEffect(() => {
        Services.getMovies()
            .then(res => setState(res))
    }, [])
    console.log(state);

    return (
        <div className="MIL_App">
            <NavBar />
            <HeaderBanner />
            <div className="MIL_App-grid">
                {
                    state && state.map((e, i) => {
                        console.log(e.cover);

                        return (
                            <div className="MIL_App-grid-item" key={i}>
                                <h1>{e.title}</h1>
                                <img src={e.cover} alt={e.title} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default App
