import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import SideBarReducer from './sideBar/reducer'
import themeReducer from './theme/reducer'

const rootReducer = combineReducers({
    sidebar: SideBarReducer,
    theme: themeReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
