import React from 'react';
import styled from 'styled-components';

import {
  Label
} from '../../utils/styles'

export const Footer = () => {
  return (

    <StyledFooter>
      <FindMeHere>
        <Label>FIND ME HERE</Label>
        <SocialIcons>
          <a href="https://www.linkedin.com/in/jessi-nygren-walhed-7bb81010">
            <SocialIcon src="../images/linkedin.svg" alt="linkedin-logo" />
          </a>
          <a href="https://github.com/hemmahosjessi?tab=repositories">
            <SocialIcon src="../images/github.svg" alt="github-logo" />
          </a>
          <a href="https://github.com/hemmahosjessi?tab=repositories">
            <SocialIcon src="../images/facebook.svg" alt="github-logo" />
          </a>
          <a href="https://github.com/hemmahosjessi?tab=repositories">
            <SocialIcon src='../images/spotify.svg" alt="github-logo' />
          </a>
        </SocialIcons>
      </FindMeHere>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
    width: 100%;
    height: 96px;
    background-color: var( --background-color-grey);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 2rem 2rem 2rem;
    position: absolute;
`

const FindMeHere = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
`

const SocialIcons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
`

const SocialIcon = styled.img`
    display: flex;
    height: 32px;
    transform: scale;
    transition-property: all;
    transition-duration: 0.4s;

        &:hover {
            transform: scale(1.1);
            cursor: pointer;
        }
    }
`