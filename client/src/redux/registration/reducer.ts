import { access } from 'fs'
import { CREATE_REGISTER } from './action'

const initialState = false

const registrationReducer = (state = initialState, action) => {
    if (!action) return state

    switch(action?.type) {
        case CREATE_REGISTER:
            return action.payload
        break
        default:
            return state
    }
}

export default registrationReducer
