import { createStore, combineReducers } from 'redux'
import SideBarReducer from './SideBar/reducer'

const rootReducer = combineReducers({
    sidebar: SideBarReducer
})

const store = createStore(rootReducer)

export default store
