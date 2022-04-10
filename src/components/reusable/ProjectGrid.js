import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"
import { PicCard } from './PicCard'

const linkStyle = {
    textDecoration: "none",
  };


export const ProjectGrid = () => {

    return (
        <StyledGrid>
            <Link to='/fe' style={linkStyle}>
            <PicCard
            image={'news_site.png'}
            label='NEWS SITE'
            title="Started with building responsive webpages"
            description="In this weeks project we learned to create the most common layouts and structures of web pages – such as landing pages and one-pagers." />
            </Link>
            <Link to='/about' style={linkStyle}>
            <PicCard
            image={'business_site.png'}
            label='THE BUSINESS SITE'
            title="Forms, Requests and a Touch of JavaScript"
            description="Learning a bit more about how the internet works and how to use forms to send requests. Dipping our toes a bit in the big sea that is JavaScript." />
            </Link>
            <Link to='/contact' style={linkStyle}>
            <PicCard
            image={'chat_bot.png'}
            label='CHATBOT'
            title="Getting Started with JavaScript"
            description="The fundamental syntax and concepts of JavaScript – not only relevant for JavaScript but also for all other programming languages you will learn in the future." />
            </Link>
            <Link to='/ui' style={linkStyle}>
             <PicCard
             image={'github_tracker.png'}
            label='GITHUB TRACKER'
            title="Digging deeper into API's and start with unit testing"
            description="Deepening our API skills and keep exploring the power of APIs. Trying out some unit testing, which is an important part of software development." />
            </Link>
            <Link to='/ui' style={linkStyle}>
             <PicCard
             image={'happy_thoughts.png'}
            label='HAPPY THOUGHTS'
            title="A component's life cycle and how to react to that"
            description="In this week's project, we got to practice our React state skills by fetching and posting data to an API." />
            </Link>
            <Link to='/about' style={linkStyle}>
            <PicCard
            image={'quiz.png'}
            label='THE QUIZ'
            title="Start using Global State with Redux"
            description="Learning about the global state using Redux. Aroup programming project, so also learning how to work as a dev team in more ways than only mob-programming." />
            </Link>
            <Link to='/fe' style={linkStyle}>
            <PicCard
            image={'todo_app.png'}
            label='TODO APP'
            title="Redux: Reducers and Actions"
            description="An application which pulls together all the parts of redux by building a todo app." />
            </Link>
            <Link to='/contact' style={linkStyle}>
            <PicCard
            image={'the_labyrinth.png'}
            label='THE LABYRINTH'
            title="Redux and APIs - A text-based adventure. "
            description="The goal for this week was to use the API specified to build a frontend which gives the user control over what to do next. Focus - using thunks and redux to build the communication with the backend." />
            </Link>
        </StyledGrid>
    )
}


export const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    padding: 4rem 6rem;
`
