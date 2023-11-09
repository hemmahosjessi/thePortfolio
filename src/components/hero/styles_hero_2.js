import styled from 'styled-components';
// Hero //

// export const HeroSection = styled.section`
//     height: 600px;
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     grid-column-gap: 4rem;
//     grid-row-gap: 2rem;
//     // background-color: var(--yellow);
//     background-color: var(--green);
//     border-radius: 1rem;
//     margin: 0 6rem;
//     padding: 6rem;
// `

export const HeroSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 6rem;
`

export const TopSection = styled.section`
    margin-bottom: 3rem;
`

export const H1 = styled.h1`
    font-size: 80px;
    line-height: 86px;
    font-weight: 100;
    margin: 1rem 0 1rem 0;
    color: var(--onGreen);
`

// export const Title = styled.h2`
//     font-size: 6rem;
//     line-height: 6.8rem;
//     font-weight: 700;
//     color: #333333;
//     margin-top: 2rem;
//     // max-width: 50%;
//     color: var(--onGreen100)
// `

export const Title = styled.h2`
    font-size: 8rem;
    line-height: 8.5rem;
    font-weight: 700;
    color: #333333;
    margin-top: 2rem;
    width: 80%;
    color: var(--onGreen100)
`

export const TitleSmall = styled.p`
    line-height: 1 rem;
    font-weight: 500;
    margin-top: 2rem;
    // max-width: 50%;
    color: var(--text-primary);
`

export const ColorSpan = styled.span`
    color: var(--onGreen);
    font-weight: 600;
`

// export const IntroSection = styled.section`
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-end;
//     margin-left: 1rem;
//     padding: 2rem;
//     // background-color: rgba(255,255,255,0.05);
//     // border-radius: 1rem;
// `

// export const IntroSection = styled.section`
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-end;
//     margin-left: 1rem;
//     padding: 2rem;
// `

export const IntroSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 3rem;
    padding-left: 50%;
`

// export const P = styled.p`
//     font-size: 1rem;
//     line-height: 1.875rem;
//     font-weight: 400;
//     // color: var(--text-primary-inverse);
//     color: var(--onGreen300);
//     margin-bottom: 2rem;
// `

export const P = styled.p`
    font-size: 1rem;
    line-height: 1.875rem;
    font-weight: 400;
    margin-bottom: 2rem;
    max-width: 80ch;
`