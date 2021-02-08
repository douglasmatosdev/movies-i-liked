import React from 'react'
import styled, { css } from 'styled-components'
import Select from 'react-select'

const options = [
    { value: '1994', label: '1994' },
    { value: '1995', label: '1995' },
    { value: '1996', label: '1996' },
]

interface Props {
    className?: string
}

const SelectYear = ({ className }: Props): JSX.Element => {
    const [selectedOption, setSelectedOption] = React.useState({ value: '1993', label: '1993' });

    return (
        <SelectYearContainer className={className}>
            <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
        </SelectYearContainer>
    )

}

export default SelectYear

const SelectYearContainer = styled.div`

`