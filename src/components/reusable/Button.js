import React from 'react';
import styled from 'styled-components';

// import {
//   Label
// } from '../../utils/styles'

export const Button = ({ label }) => {
  return (
    <StyledButton type="button">
      <ButtonLabel>{label}</ButtonLabel>
    </StyledButton>
  )
}

export const StyledButton = styled.button`
margin: 0;
height: 48px;
width: 30%;
border-radius: 24px;
border: none;
display: flex;
justify-content: center;
align-items: center;
right: 24px;
bottom: 24px;
background-color: var(--green100);
transition: 0.5s;

&:hover{
  cursor: pointer;
  transform: translateY(-2px);
  background-color: var(--green200);

`

export const ButtonLabel = styled.p`
color: var(--text-primary-inverse);
font-size: 1rem;
`