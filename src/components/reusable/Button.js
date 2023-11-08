import React from 'react';
import styled from 'styled-components';

import {
  Label
} from '../../utils/styles'

export const Button = ({ label }) => {
  return (
    <StyledButton type="button">
      <Label>{label}</Label>
    </StyledButton>
  )
}

export const StyledButton = styled.button`
margin: 0;
height: 48px;
border-radius: 24px;
border: none;
display: flex;
justify-content: center;
align-items: center;
right: 24px;
bottom: 24px;
background-color: var(--background-color-white);
transition: 0.5s;

&:hover{
  cursor: pointer;
  transform: translateY(-2px);
  text-decoration: underline;

`