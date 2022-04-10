import React from "react";
import styled from "styled-components";


export const Gif = () => {

    return (
        <ImgContainer>  
            <ImgWide src="../images/Screen Recording 2022-04-04 at 15.36.27.gif"/>
            <Overlay>
                <Text>
                    <Label>SERVEY</Label>
                    <Title>Start using state in React</Title>
                    <Description>This week we finally got to use React to its full potential by introducing State.
                   We practiced React state and controlled forms by making a Typeform like product. The completed project should consist of at least 3 questions that need to be answered by users. When the user presses submit, they should see a summary of their answers.
                    </Description>
                    </Text>
            </Overlay>
        </ImgContainer>


    )
}


const ImgWide = styled.img`
    object-fit: contain;
    display: block;
    width: 100%;
    height: auto;
    border-radius: 1rem;
    transition: .5s ease;
`

const ImgContainer = styled.div`
    margin: 4rem 6rem;
    position: relative;
`

const Overlay = styled.div `
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    transition: .5s ease;
    background-color: var(--background-color-grey);
    cursor: pointer;;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 1rem;

    &:hover {
        opacity: 0.98;
    }
`
const Text = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
`

const Label = styled.p`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.1em;
    color: var(--text-secondary);
`

const Title = styled.h3`
    font-size: 4rem;
    line-height: 5rem;
    font-weight: 700;
    color: #333333;
    margin-top: 0;
`

const Description = styled.p`
    font-size: 1.5rem;
    line-height: 2rem;
    color: #333;

`
