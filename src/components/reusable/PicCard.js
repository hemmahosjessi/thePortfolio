import React from "react";
import styled from "styled-components";

import { 
    Label,
} from '../../utils/styles'




export const PicCard = ({image, label, title, description, className}) => {

    return (
        <StyledCard className={className}>
            <Picture src={`images/${image}`}></Picture>
            <Label>{label}</Label>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </StyledCard>
    )
}


const StyledCard = styled.div`
    border-radius: 0.5rem;
    // height: 100%;
    padding: 2rem;
    background-color: var(--base);
    transform: scale;
    transition-property: all;
    transition-duration: 0.4s;
    display: flex; 
    flex-direction: column;

    &:hover {
    // box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    background-color: var(--background-color-grey);
    transform: scale(1.02);
    cursor: pointer;
    }

`

const Title = styled.h2`
    font-size: 1.5rem;
    line-height: 1.8rem;
    font-weight: 400;
    color: #333333;
    margin-top: 0;
`

const Description = styled.p`
    font-size: 1rem;
    line-height: 1.5rem;
    color: #333333;
`
const Picture = styled.img`
    width: 50%;
    height: 50%;
    margin-bottom: 1rem;
`
