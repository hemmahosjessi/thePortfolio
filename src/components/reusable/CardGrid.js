import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
import { Card } from './Card'

const linkStyle = {
    textDecoration: "none",
  };


export const CardGrid = () => {

    return (
        <StyledGrid>
            <Link to='/about' style={linkStyle}>
            <Card
            label='ABOUT ME'
            title="Lorem ipsum dolor sit"
            description="Green apples have a high fiber content which helps in increasing the
                body's metabolism. While consuming an apple, make sure that you're not
                tossing the peel in the trash." />
            </Link>
            <Link to='/ui' style={linkStyle}>
             <Card
            label='VISUAL DESIGN'
            title="Lorem ipsum dolor sit"
            description="Green apples have a high fiber content which helps in increasing the
                body's metabolism. While consuming an apple, make sure that you're not
                tossing the peel in the trash." />
            </Link>
            <Link to='/fe' style={linkStyle}>
            <Card
            label='FRONTEND DEVELOPMENT'
            title="Lorem ipsum dolor sit"
            description="Green apples have a high fiber content which helps in increasing the
                body's metabolism. While consuming an apple, make sure that you're not
                tossing the peel in the trash." />
            </Link>
            <Link to='/contact' style={linkStyle}>
            <Card
            label='CONTACT'
            title="Lorem ipsum dolor sit"
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
    padding: 4rem 6rem;
`
