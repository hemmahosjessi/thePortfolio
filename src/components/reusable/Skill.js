import React from "react";
import styled from "styled-components";


export const Skill = ({title, category}) => {

    return (
        <StyledSkill>
           <Category>{category}</Category>
            <Skilltext>{title}</Skilltext>
        </StyledSkill>
    )
}


export const StyledSkill = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    padding: 1rem;
    height: 56px;
    // background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Skilltext = styled.p`
    font-size: 1rem;
    line-height: 1.5rem;
    color: #333333;
    margin: 0;
`

export const Category = styled.p`
border-radius: 12px;
height: 24px;
font-size: 0.875rem;
line-height: 1rem;
font-weight: 300;
color: #333333;
margin: 0;
`
