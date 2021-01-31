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
    
    background: #fff1;
    color: #fff9;
    font-size: 16px;

    border: 1px solid #fff5;
`
const InputSearchContainer = styled.div`
  min-width: 20%;
`