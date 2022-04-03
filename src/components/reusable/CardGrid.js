import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
import { Card } from './Card'

const linkStyle = {
    textDecoration: "none",
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  };


export const CardGrid = () => {

    return (
        <StyledGrid>
            <Link to='/about' style={linkStyle}>
            <Card
            title="About me"
            description="Green apples have a high fiber content which helps in increasing the
                body's metabolism. While consuming an apple, make sure that you're not
                tossing the peel in the trash." />
            </Link>
            <Link to='/ui' style={linkStyle}>
             <Card
            title="Visual Design"
            description="Green apples have a high fiber content which helps in increasing the
                body's metabolism. While consuming an apple, make sure that you're not
                tossing the peel in the trash." />
            </Link>
            <Link to='/fe' style={linkStyle}>
            <Card
            title="Frontend Development"
            description="Green apples have a high fiber content which helps in increasing the
                body's metabolism. While consuming an apple, make sure that you're not
                tossing the peel in the trash." />
            </Link>
            <Link to='/contact' style={linkStyle}>
            <Card
            title="Contact"
            description="Green apples have a high fiber content which helps in increasing the
                body's metabolism. While consuming an apple, make sure that you're not
                tossing the peel in the trash." />
            </Link>
        </StyledGrid>
    )
}


export const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    padding: 2rem 6rem;
`

// export const StyledCard = styled.div`
//     border-radius: 1rem;
//     height: 100%;
//     padding: 2rem;
// `

export const Title = styled.h2`
    font-size: 2rem;
    line-height: 2rem;
`

export const Description = styled.p`
    font-size: 1rem;
    line-height: 1.5rem;
`
