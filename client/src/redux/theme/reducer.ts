import { lightTheme } from '../../ui/theme'
import { SWITCH_THEME } from './actions'

const initialState = lightTheme


const reducerTheme = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_THEME: {
            console.log('reducer', action.theme);
            
            return action.theme
            
        }
        default:
            return state
    }
}

export default reducerTheme
