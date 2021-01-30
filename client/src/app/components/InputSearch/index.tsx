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
    height: 40px;
    padding: 0 8px;
    
    background: #fff3;
    color: #fff9;
    font-size: 16px;

    border: none;
`
const InputSearchContainer = styled.div`
  min-width: 40%;

`