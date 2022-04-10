import React from "react";
import { Hero2 } from '../components/hero/Hero2'
import { SkillsGrid } from '../components/reusable/SkillsGrid'
import { ProjectGrid } from '../components/reusable/ProjectGrid'
import { TwoColumn } from "components/reusable/TwoColumn"
import { Gif } from "components/reusable/Gif"




export const StartPage = () => {
    return (
        <>
        <Hero2 />
        <SkillsGrid/>
        <TwoColumn
            label='SKILLS'
            title="List of my skills"
            description="Green apples have a high fiber content which helps in increasing the
                body's metabolism. While consuming an apple, make sure that you're not
                tossing the peel in the trash." />
        <Gif />
        <ProjectGrid />
        </>

        
    )

}