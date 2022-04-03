import styled from "styled-components";



// Hero //

export const HeroSection = styled.section `
    background: var(--background-color);
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--yellow);
    border-radius: 1rem;
    margin: 0 6rem;
    padding: 6rem;
`

export const TopSection = styled.section `
    margin-bottom: 3rem;
`

export const H1 = styled.h1 `
    font-size: 80px;
    line-height: 86px;
    font-weight: 100;
    margin: 1rem 0 1rem 0;
`

export const ColorSpan = styled.span`
    color: var(--green);
    font-weight: 600;
`

export const IntroSection = styled.section `
    display: flex;
    flex-direction: column;
    background-color: var(--yellow);
    border-radius: 1rem;
    justify-content: flex-end;
`

export const P = styled.p `
    font-size: 1rem;
    line-height: 1.875rem;
    max-width: 33%;
`
