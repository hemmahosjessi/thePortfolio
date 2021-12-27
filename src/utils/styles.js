import styled from "styled-components";
// import { keyframes } from "styled-components"


// Header //


export const MenuIcon = styled.img `
    height: 24px;
    width: auto;
    padding: 1rem;
    background-color: #EBFE0E;
    position: fixed;
    top: 16px;
    right: 16px;
    z-index: 1;
    float: none;
`

export const JesIcon = styled.h1 `
    font-size: 1.125rem;
    font-weight: 400;
    padding: 1rem;
    background-color: #EBFE0E;
    position: fixed;
    top: 16px;
    left: 16px;
    z-index: 1;
    float: none;
    margin: 0;

    @media (min-width: 992px) {
        padding: 1.5rem;
    }

    @media (min-width: 767px) and (max-width: 991px) {
          padding: 1.5rem;
        }
`

// Hero //

export const HeroSection = styled.section `
    background: #F5F4F0;
    display: flex;
    flex-direction: column;
    padding: 3rem 1rem 2rem 1rem;

    @media (min-width: 992px) {
        flex-direction: row;
        padding: 0 0 0 12%;
    }

    @media (min-width: 767px) and (max-width: 991px) {
          padding: 4rem 3rem 4rem 3rem;
        }

`

export const MainSection = styled.div`
    padding-top: 0;
    padding-bottom: 0;

    @media (min-width: 992px) {
        padding-top: 5rem;
        padding-bottom: 5rem;
    }

    @media (min-width: 767px) and (max-width: 991px) {
        padding-top: 2rem;
        padding-bottom: 2rem;
      }
`

export const ImageAndButton = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ImageOfMe = styled.img `
    width: 160px;
    margin-bottom: 1rem;
    margin-top: 4rem;
    align-self: flex-start;

    @media (min-width: 767px) and (max-width: 991px) {
        width: 300px;
        height: auto;
        margin-bottom: 1rem;
      }

    @media (min-width: 992px) {
        width: 300px;
        height: auto;
        margin-bottom: 4rem;
        cursor: pointer;

    }
`

export const Label = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #868686;
`

export const H1 = styled.h1 `
    font-size: 72px;
    line-height: 72px;
    font-weight: 100;
    margin: 1rem 0 1rem 0;
`

export const H2 = styled.h2 `
    font-size: 1.125rem;
    font-weight: 400;
    margin: 0;
`

export const P = styled.p `
    font-size: 1rem;
    line-height: 1.875rem;
    max-width: 450px;

    @media (min-width: 767px) and (max-width: 991px) {
        font-size: 1.125rem;
        line-height: 2rem;
      }

    @media (min-width: 992px) {
        font-size: 1.125rem;
        line-height: 2rem;
    }
`

export const ContactButton = styled.button `
    min-width: 120px;
    height: 40px;
    background-color: #1a1a1a;
    color: #F5F4F0;
    border: none;
    border-radius: 24px;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 1rem;
    cursor: pointer;
`

export const FindMeHere = styled.div `
    display: flex;
    flex-direction: column;
    margin-right: 4rem;
`

export const Contact = styled.div `
    display: flex;
    flex-direction: column;
`

export const BottomSection = styled.div `
    display: flex;
    flex-direction: row;

    @media (min-width: 767px) and (max-width: 991px) {
        margin-top: 1rem;
      }

    @media (min-width: 992px) {
        margin-top: 2rem;
    }
`

export const SocialIcons = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 1rem;
`

export const SocialIcon = styled.img`
    display: flex;
    margin-right: 0.5rem;
    height: 32px;


    @media (min-width: 767px) and (max-width: 991px) {
        height: 40px;
      }

    @media (min-width: 992px) {
        height: 40px;
    }
`


// AboutPage


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

