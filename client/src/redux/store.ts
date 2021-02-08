import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import SideBarReducer from './sideBar/reducer'
import themeReducer from './theme/reducer'
import registrationReducer from './registration/reducer'

const rootReducer = combineReducers({
    sidebar: SideBarReducer,
    theme: themeReducer,
    register: registrationReducer
})

const persistedReducer = persistReducer({
    key: 'root',
    storage: storage
}, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistedStore = persistStore(store)
