export default function SideBarReducer(state = false, action) {
    switch(action.type) {
        case 'SIDE_BAR': {
            return action.payload
        }
        break
        default:
            return state
    }
}