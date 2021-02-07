import React from 'react';
import styled from 'styled-components';

interface Props {
    placeholder?: string;
}

export const InputSearch = ({ placeholder }: Props) => {
  return (
      
      <InputSearchContainer>
      <Input placeholder={placeholder} />
      </InputSearchContainer>
  );
}

const Input = styled.input`
    width: 150px;
    height: 30px;
    padding: 0 8px;
    
    background: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
    color: ${props => props.theme.PRIMARY_TEXT_COLOR};
    font-size: 16px;

    border: 1px solid ${props => props.theme.PRIMARY_BORDER_COLOR};
`
const InputSearchContainer = styled.div`
  min-width: 20%;
`