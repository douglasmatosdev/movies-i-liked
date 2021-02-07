import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'
import '@fortawesome/fontawesome-free/js/brands'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@csstools/normalize.css'
import './index.scss'

import store from './store/store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
