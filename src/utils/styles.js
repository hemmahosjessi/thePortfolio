import styled from "styled-components";


export const AboutSection = styled.section `
    display: flex;
    flex-direction: row;
    padding: 6rem;
    margin: 1rem;
`

export const AboutText = styled.section `
    display: flex;
    flex-direction: column;
`

export const Label = styled.p`
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.1em;
    color: var(--text-secondary);
`

export const StyledCardGrid = styled.div`
    width: 100%; 
    margin: 0 auto;       
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
`


