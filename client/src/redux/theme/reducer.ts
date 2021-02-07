import { lightTheme } from '../../ui/theme'
import { SWITCH_THEME } from './actions'

const initialState = lightTheme

const reducerTheme = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_THEME:
            return action.payload
        break
        default:
            return state
    }
}

export default reducerTheme
