import styled from "styled-components";

// Header //

export const HeaderContainer = styled.header`
padding: 3rem 6rem;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

export const JesIcon = styled.h1 `
    font-size: 1.125rem;
    font-weight: 400;
    float: none;
    margin: 0;

        @media (min-width: 992px) {
            transform: scale;
            transition-property: all;
            transition-duration: 0.4s;
    
            &:hover {
                transform: scale(1.2);
                cursor: pointer;
            }
        }
    }
`

export const MenuIcon = styled.img `
    height: 20px;
    width: auto;
    cursor: pointer;
    z-index: 1;
    transition: all 0.4s ease;

    &:hover {
        // transform: rotate(180deg);
        background-color: #EBFE0E;
        padding: 1rem;
        border-radius: 8px;
    }
`

export const Button = styled.button`
    border: none;
    background: none;
`