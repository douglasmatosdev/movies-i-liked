import React from 'react'
import ReactDOM from 'react-dom'

import './App.css'
import _300 from './300.png'

const App = () => {

    const PORT = 3000
    const baseURL = `http://localhost:${PORT}`

    fetch(`${baseURL}/movies`)
        .then(res => {
            console.log(res)
        })
    return (
        <div className="teste-div">
            <h1>Hello World</h1>
            <img src={_300} alt="300" />
        </div>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)