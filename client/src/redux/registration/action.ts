export const CREATE_REGISTER = 'REGISTER'

export const registrationAction = register => {
    return {
        type: CREATE_REGISTER,
        payload: register
    }
}