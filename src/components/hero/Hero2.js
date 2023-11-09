/* eslint-disable max-len */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

// import { Label } from '../../utils/styles'

import { Button } from '../reusable/Button'

import {
  HeroSection,
  TopSection,
  Title,
  TitleSmall,
  ColorSpan,
  IntroSection,
  P
} from './styles_hero_2'

export const Hero2 = () => {
  return (
    <HeroSection>
      <TopSection>
        <TitleSmall>JESSI NYGREN WALHED</TitleSmall>
        <Title>Visual Design + Frontend  <ColorSpan>= TRUE</ColorSpan></Title>
      </TopSection>
      <IntroSection>
        {/* <TitleSmall>INTRO</TitleSmall> */}
        <P>My name is Jessi Nygren Walhed. I am a UI/UX Designer and have worked with web projects as a visual designer for about 15 years. Recently I added Frontend Development to my skills. A 24 week Frontend Bootcamp with Technigo. These two skills - Design and FE i think will fit very well together. Design + Frontend = True.</P>
        <Button
          label="Say hello!" />
        {/* <button type="button">CONNECT</button> */}
      </IntroSection>
    </HeroSection>
  )
}