import React from "react";
import styled from "styled-components";





export const Card = ({title, description}) => {

    return (
        <StyledCard>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </StyledCard>
    )
}


export const StyledCard = styled.div`
    border-radius: 1rem;
    height: 100%;
    padding: 2rem;
    background-color: var(--base);
`

export const Title = styled.h2`
    font-size: 1.5rem;
    line-height: 1.5rem;
    color: #333333;
`

export const Description = styled.p`
    font-size: 1rem;
    line-height: 1.5rem;
    color: #333333;
`
