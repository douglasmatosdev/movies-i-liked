import React from 'react'
import Switch from 'react-switch'
import { useSelector, useDispatch } from 'react-redux'

import { switchTheme } from '../../../redux/theme/actions'
import { lightTheme, darkTheme } from '../../../ui/theme'

const AppSwitch = (): JSX.Element => {
    const theme = useSelector(state => state.theme)
    const dispatch = useDispatch()

    return <Switch
        onChange={() => theme.mode === 'light' ? dispatch(switchTheme(darkTheme)) : dispatch(switchTheme(lightTheme))}
        checked={theme.mode === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        width={40}
        height={10}
        handleDiameter={20}
        offColor='#888888'
        onColor='#000000'
    />
}

export default AppSwitch
