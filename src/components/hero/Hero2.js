import React from "react";

import { 
    Label,
} from '../../utils/styles'

import { 
    HeroSection,
    TopSection,
    H1,
    ColorSpan,
    IntroSection,
    P,
} from './styles_hero_2'



export const Hero2 = () => {
    return (
        <HeroSection>
            <TopSection>
                <Label>JESSI NYGREN WALHED</Label>
                <H1>Visual Design + Frontend = <ColorSpan>TRUE</ColorSpan></H1>
            </TopSection>
            <IntroSection>
                <Label>INTRO</Label>
                <P>My name is Jessi Nygren Walhed. I am a UI/UX Designer that has worked with web projects for about 15 years. Recently  I added Frontend Development to my skills. A 24 week Frontend Bootcamp with Technigo. These two skills with Design and FE will fit well together. Design + Frontend = True.</P>
            </IntroSection>
        </HeroSection>
    )

}