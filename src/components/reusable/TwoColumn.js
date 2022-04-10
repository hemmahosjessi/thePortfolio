import React from "react";
import styled from "styled-components";
import { SkillsCard } from "components/reusable/SkillsCard";

import { 
    Label,
} from '../../utils/styles'


export const TwoColumn  = ({label, title, description}) => {

    return (
        <StyledTwoColumn>
            <Left>
                <Label>{label}</Label>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Left>
            <Right>
                <SkillsCard />
            </Right>
        </StyledTwoColumn>
    )
}


export const StyledTwoColumn = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 4rem;
    grid-row-gap: 2rem;
    padding: 4rem 6rem 4rem 8rem;
`

export const Title = styled.h2`
    font-size: 6rem;
    line-height: 5.6rem;
    font-weight: 700;
    color: #333333;
    margin-top: 2rem;
`

export const Description = styled.p`
    font-size: 2rem;
    line-height: 2.5rem;
    color: #333333;
`

export const Left = styled.div`
    width: 100%;
`

export const Right = styled.div`
    width: 100%;
`
