import React from "react";
import { useSpring, animated } from 'react-spring';
import { Link } from "react-router-dom"

import { 
    Label,
} from '../../utils/styles'

import {
    ModalWrapper,
    Background,
    LeftContainer,
    MenuItems,
    ModalImg,
    SocialIcon,
    SocialIcons,
    FindMeHere,
    CloseModalButton,
} from './styles_menumodal.js'

const linkStyle = {
    textDecoration: "none",
  };

export const MenuModal = ({showModal, setShowModal}) => {

    const animation = useSpring({
        config: {
          duration: 300
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
      });

    const closeModal = () => {
          setShowModal(false);
        }

    return (
        <>
        {showModal ? (
            <Background onClick={closeModal}>
                {/* // <animated.div style={animation}> */}
                <ModalWrapper showModal={showModal}>
                    <LeftContainer>                    
                        <ModalImg 
                            src="https://i.ibb.co/fnqfsx0/jes-original-rounded.png"  
                            onMouseOver={e => (e.currentTarget.src = "https://i.ibb.co/QJDTqZ8/jes-original-rounded-hover.png")} 
                            onMouseOut={e => (e.currentTarget.src = "https://i.ibb.co/fnqfsx0/jes-original-rounded.png")} 
                            alt="image of me">
                        </ModalImg>
                        <FindMeHere>
                            <Label>FIND ME HERE</Label>
                            <SocialIcons>
                            <a href="https://www.linkedin.com/in/jessi-nygren-walhed-7bb81010">
                                <SocialIcon src="../images/linkedin.svg" alt="linkedin-logo"/>
                            </a>
                            <a href="https://github.com/hemmahosjessi?tab=repositories">
                                <SocialIcon src="../images/github.svg" alt="github-logo"/>
                            </a>
                            <a href="https://github.com/hemmahosjessi?tab=repositories">
                                <SocialIcon src="../images/facebook.svg" alt="github-logo"/>
                            </a>
                            <a href="https://github.com/hemmahosjessi?tab=repositories">
                                <SocialIcon src="../images/spotify.svg" alt="github-logo"/>
                            </a>
                            </SocialIcons>
                        </FindMeHere>
                    </LeftContainer>
                    <MenuItems>
                    <li><Link to='/' style={linkStyle}>Home</Link></li>
                        <li><Link to='/about' style={linkStyle}>About me</Link></li>
                        <li><Link to='/ui' style={linkStyle}>Visual Design</Link></li>
                        <li><Link to='/fe' style={linkStyle}>Frontend</Link></li>
                        <li><Link to='/contact' style={linkStyle}>Contact</Link></li>
                    </MenuItems>
                    <CloseModalButton
                        aria-label='Close modal'
                        onClick={() => setShowModal(prev => !prev)}
                    />
                </ModalWrapper>
                {/* </animated.div> */}
            </Background>
        ) : null}
        </>
    )
}

