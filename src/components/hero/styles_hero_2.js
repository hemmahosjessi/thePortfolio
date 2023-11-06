import styled from "styled-components";



// Hero //

export const HeroSection = styled.section `
    height: 600px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 4rem;
    grid-row-gap: 2rem;
    // background-color: var(--yellow);
    background-color: #006D31;
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

export const Title = styled.h2`
    font-size: 6rem;
    line-height: 6.8rem;
    font-weight: 700;
    color: #333333;
    margin-top: 2rem;
    // max-width: 50%;
`

export const ColorSpan = styled.span`
    color: var(--green);
    font-weight: 600;
`

export const IntroSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 1rem;
`

export const P = styled.p`
    font-size: 1rem;
    line-height: 1.875rem;
`
