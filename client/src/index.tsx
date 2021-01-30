import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'
import '@csstools/normalize.css'
import './index.scss'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)