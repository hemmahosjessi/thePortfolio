import React from 'react';
import styled from 'styled-components';

import {
  Label
} from '../../utils/styles'

export const Card = ({ label, title, description, className }) => {
  return (
    <StyledCard className={className}>
      <Label>{label}</Label>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </StyledCard>
  )
}

export const StyledCard = styled.div`
    border-radius: 0.5rem;
    // height: 100%;
    padding: 2rem;
    background-color: var(--base);
    transform: scale;
    transition-property: all;
    transition-duration: 0.4s;

    &:hover {
    // box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    background-color: var(--background-color-grey);
    transform: scale(1.02);
    cursor: pointer;
    }

`

export const Title = styled.h2`
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 400;
    color: #333333;
    margin-top: 0;
`

export const Description = styled.p`
    font-size: 1rem;
    line-height: 1.5rem;
    color: #333333;
`
