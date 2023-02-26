import React from 'react'
import './AboutScreen.css'
import './AboutScreenResponsive.css'
import { useNavigate } from 'react-router-dom';
import resume from '../../Resources/SRR Resume.pdf'

function AboutScreen() {
    const description = ["Welcome to my portfolio! A software developer and designer with a deep passion for solving problems and using technology to make a positive impact. \n\nWith a focus on front-end web development and Android mobile application development, I have a desire to create visually appealing and user-friendly digital experiences. ", "\n\"Design is not just what it looks like and feels like. Design is how it works.\" - Steve Jobs", "\nThe above quote speaks to my approach in every project I take on. I bring a solutions-focused mindset to real-world problems, striving to find the ideal balance between functionality and design in everything I create. As someone who has always been drawn to the world of coding and programming, I am constantly seeking new opportunities to learn and grow as a developer. Whether I am working on a project for a client or just tinkering with new technologies on my own, I am always eager to dive into the next challenge and explore the endless possibilities of what can be built with code.", "\nWhether you're looking to hire a developer or just want to learn more about my work, I hope my portfolio provides a glimpse into my passion for solving problems and using technology to make a positive impact.", "\nLet's build something amazing together!"]
    const navigate = useNavigate();
    const descriptionComponent = description.map ( data => {
        return (<p>{data}</p>)
    })

    function onClickHandle(id) {
        if (id === 1) {
            navigate("/")
        } else if (id === 2) {
            navigate("/contact")
        } else if (id === 3) {
            navigate("/projects")
        }
    }

  return (
    <div className='about-main-container'>
        <nav className='about-nav-bar'>
            <div className='nav-bar-div'>
                <span onClick={() => onClickHandle(2)} className='text-focus-in-about'>contact</span>
            </div>
            <div>
                <span className='main-nav animate-about-nav'>About</span>
            </div>
            <div className='nav-bar-div'>
                <span onClick={() => onClickHandle(3)} className='text-focus-in-about'>projects</span>
            </div>
        </nav>
        <main className='about-secondary-container animate-in-up'>
            <header className='header-about'>
                <div>
                    <span onClick={() => onClickHandle(1)} className='programming-syntax hover-properties'>function about()<br/>&nbsp;&nbsp;&nbsp;return (</span>
                </div>
            </header>
            <div className='about-div-details'>
                <header className='header-details'>
                    <span className='programming-syntax'>&lt;&nbsp;header&nbsp;&gt;</span>
                    <div className='div-name'>
                        <span>I'm Sunil Kumar. A budding software developer.</span>
                    </div>
                    <span className='programming-syntax remove-margin'>&lt;&nbsp;header&nbsp;&nbsp;/&gt;</span>
                </header>
                <div className='div-description'>
                    {descriptionComponent}
                </div>
                <a className='resume-button' href={resume}  download>
                    my resume
                </a>
            </div>
        </main>
    </div>
  )
}

export default AboutScreen