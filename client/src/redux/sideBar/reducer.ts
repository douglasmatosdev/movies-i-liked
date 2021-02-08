export default function SideBarReducer(state = false, action) {
    if (!action) return state
    
    switch(action.type) {
        case 'SIDE_BAR': {
            return action.payload
        }
        break
        default:
            return state
    }
}