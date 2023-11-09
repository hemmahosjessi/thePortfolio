import React from 'react';
import styled from 'styled-components';
import { Skill } from './Skill'

export const SkillsCard = () => {
  return (
    <StyledSkillsCard>
      <Skill
        title="HTML5"
        category="CODE" />
      <Skill
        title="CSS3"
        category="CODE" />
      <Skill
        title="Javascript ES6"
        category="CODE" />
      <Skill
        title="Github"
        category="CODE" />
      <Skill
        title="React"
        category="CODE" />
      <Skill
        title="Redux"
        category="CODE" />
      <Skill
        title="Node.js"
        category="CODE" />
      <Skill
        title="Figma"
        category="DESIGN" />
      <Skill
        title="Photoshop"
        category="DESIGN" />
      <Skill
        title="Illustrator"
        category="DESIGN" />
      <Skill
        title="Sketch"
        category="DESIGN" />
      <Skill
        title="Keynote"
        category="DESIGN" />
      <Skill
        title="Design Lead"
        category="DESIGN" />
      <Skill
        title="Design systems"
        category="DESIGN" />
      <Skill
        title="Agile methodology"
        category="OTHER" />

    </StyledSkillsCard>
  )
}

export const StyledSkillsCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 1rem;
    border-radius: 1rem;
    padding: 2rem 2rem 1rem 2rem;
    background-color: var(--background-color-grey);
    height: 100%;
`

export const Title = styled.h3`
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 400;
    color: #333333;
    margin-top: 0;
`

