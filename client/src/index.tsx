import React from 'react'
import ReactDOM from 'react-dom'

import { store, persistedStore } from './redux/store'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import style, { ThemeProvider } from 'styled-components'

import '@fortawesome/fontawesome-free/js/brands'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@csstools/normalize.css'

import './index.scss'
import App from './app/App'

const Main = ({ children }) => {
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </React.Fragment>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistedStore}>
                <Main>
                    <App />
                </Main>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
