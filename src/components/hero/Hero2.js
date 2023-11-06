/* eslint-disable max-len */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

import { Label } from '../../utils/styles'

import {
  HeroSection,
  TopSection,
  Title,
  ColorSpan,
  IntroSection,
  P
} from './styles_hero_2'

export const Hero2 = () => {
  return (
    <HeroSection>
      <TopSection>
        <Label>JESSI NYGREN WALHED</Label>
        <Title>Visual Design + Frontend  <ColorSpan>= TRUE</ColorSpan></Title>
      </TopSection>
      <IntroSection>
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <Label>INTRO</Label>
        // eslint-disable-next-line max-len, max-len
        <P>My name is Jessi Nygren Walhed. I am a UI/UX Designer that has worked with web projects for about 15 years. Recently  I added Frontend Development to my skills. A 24 week Frontend Bootcamp with Technigo. These two skills with Design and FE will fit well together. Design + Frontend = True.</P>
      </IntroSection>
    </HeroSection>
  )
}