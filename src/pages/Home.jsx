import React from 'react'
import Contact from "../components/Contact"
import Expertise from "../components/Expertise"
import Header from "../components/Header"
import Heritage from "../components/Heritage"
import InfoSection from "../components/InfoSection"
import Journey from "../components/Journey"
import Menu from "../components/Menu"
import Story from "../components/Story"
import { StorySection } from "../components/StorySection"
import Testimonials from "../components/Testimonials"

const Home = () => {
    return (
        <div>
            <Header />
            <Story />
            <Journey />
            <Heritage />
            <Expertise />
            <StorySection />
            <Menu />
            <InfoSection />
            <Testimonials />
            <Contact />
        </div>
    )
}

export default Home
