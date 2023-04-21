import React from "react";
import styled from "styled-components";


export const TextContentBlock = ({image, h1, preamble, bodyOne, bodyTwo, className}) => {

    return (
        <PageContent className={className}>
            <Picture src={`${image}`}></Picture>
            <H1>{h1}</H1>
            <Preamble>{preamble}</Preamble>
            <Body>{bodyOne}</Body>
            <Body>{bodyOne}</Body>
        </PageContent>
    )
}

export const H1 = styled.h1`
font-size: 5rem;
line-height: 5rem;
color: #333333;
`

export const Preamble = styled.p`
font-size: 2rem;
line-height: 2,5rem;
color: #333333;
`

export const Body = styled.p`
    font-size: 1rem;
    line-height: 1.5rem;
    color: #333333;
`

export const PageContent = styled.section `
    display: flex;
    flex-direction: column;
    padding: 3rem;
    margin: 1rem;
    max-width: 700px;
`

const Picture = styled.img`
width: 50%;
height: 50%;
margin-bottom: 1rem;
`



