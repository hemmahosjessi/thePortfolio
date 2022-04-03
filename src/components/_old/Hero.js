import React from "react";
import { Link } from 'react-router-dom'
import { Header } from "../header/Header";
import { 
    HeroSection,
    MainSection,
    ImageOfMe,
    Label,
    FindMeHere,
    SocialIcons,
    SocialIcon,
    P,
    Contact,
    ContactButton,
    BottomSection,
} from './styles_hero'



export const Hero = () => {
    return (
        <HeroSection>
            <Header />
            <MainSection>
                <ImageOfMe 
                    src="https://i.ibb.co/fnqfsx0/jes-original-rounded.png"  
                    onMouseOver={e => (e.currentTarget.src = "https://i.ibb.co/QJDTqZ8/jes-original-rounded-hover.png")} 
                    onMouseOut={e => (e.currentTarget.src = "https://i.ibb.co/fnqfsx0/jes-original-rounded.png")} 
                    alt="image of me"
                />
                <Label>INTRO</Label>
                <P>My name is Jessi Nygren Walhed. I am a UI/UX Designer that has worked with web projects for about 15 years. Recently  I added Frontend Development to my skills. A 24 week Frontend Bootcamp with Technigo. These two skills with Design and FE will fit well together. Design + Frontend = True.</P>
                
                <BottomSection>
                <FindMeHere>
                    <Label>FIND ME HERE</Label>
                    <SocialIcons>
                        <a href="https://www.linkedin.com/in/jessi-nygren-walhed-7bb81010">
                            <SocialIcon src="../images/linkedin.svg" alt="linkedin-logo"/>
                        </a>
                        <a href="https://github.com/hemmahosjessi?tab=repositories">
                            <SocialIcon src="../images/github.svg" alt="github-logo"/>
                        </a>
                    </SocialIcons>
                </FindMeHere>
                <Contact>
                    <Label>CONTACT</Label>
                    <Link  to='/about'>
                        <ContactButton href="#contact">Get info</ContactButton>
                    </Link>
                </Contact>
                </BottomSection>
            </MainSection>

        </HeroSection>
    )

}