import './ProjectsScreen.css'
import { useNavigate } from 'react-router-dom';
import projectsData from './ProjectsData';
import Projects from './Projects';
import './ProjectsScreenResponsive.css'

function ProjectsScreen() {
    const navigate = useNavigate();
    const projects = projectsData.map(item => {
        return (
            <Projects 
                key = {item.id}
                {...item}
            />
        )
    })
    function onClickHandle(id) {
        if (id === 1) {
            navigate("/")
        } else if (id === 2) {
            navigate("/about")
        } else if (id === 3) {
            navigate("/contact")
        }
    }

    return (
        <div className='project-main-container'>
            <nav className='about-nav-bar'>
                <div className='nav-bar-div'>
                    <span onClick={() => onClickHandle(2)} className='text-focus-in-about'>about</span>
                </div>
                <div>
                    <span className='main-nav main-nav-projects animate-about-nav'>Projects</span>
                </div>
                <div className='nav-bar-div'>
                    <span onClick={() => onClickHandle(3)} className='text-focus-in-about'>contact</span>
                </div>
            </nav>
            
            <div className='about-secondary-container project-secondary-container animate-in-up'>
                <header className='header-about'>
                    <div>
                        <span onClick={() => onClickHandle(1)} className='programming-syntax hover-properties'>function about()<br/>&nbsp;&nbsp;&nbsp;return (</span>
                    </div>
                </header>
                <div className='projects-container-1'>
                    <span>PROJECTS</span>
                    <p>Here you can find some of the best work I did in a variety of technologies</p>
                </div>
                <div className='projects-list'>
                    {projects}
                </div>
            </div>
        </div>
      )
}

export default ProjectsScreen