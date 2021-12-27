import React from "react";
import { Header } from "../components/Header"
import { 
    AboutSection,
    AboutText,
} from 'utils/styles'



export const AboutPage = () => {
    return (
        <>
        <Header />
        <AboutSection>
            <AboutText>
                <h1>THIS IS THE ABOUTPAGE</h1>
            </AboutText>
        </AboutSection>
        </>

        
    )

}