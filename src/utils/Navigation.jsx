import React from 'react'
import { Link } from 'react-router-dom'
import AnimatedText from '../components/AnimatedText'

const Navigation = () => {
  const addActiveClass = () => {
    const pages = document.querySelectorAll('.page')
    pages.forEach(page => page.classList.remove('active'))
    window.event.target.classList.add('active')
  }

  return (
    <div className="navigation-section">
        <div className="portfolio-info">
          <h1 className="name"><AnimatedText text="Prakhar Verma" /></h1>          
          <h3 className="job">Fontend Web Developer</h3>
          <p className="desc">I build pixel-perfect, engaging, <br /> and accessible digital experiences.</p>
        </div>

        <nav className="nav-links">
          <Link to="/about" className="page active" onClick={(() => addActiveClass())}>About</Link>
          <Link to="/projects" className="page" onClick={(() => addActiveClass())}>Projects</Link>
          <Link to="/technologies" className="page" onClick={(() => addActiveClass())}>Technologies</Link>
          <Link to="/resume" className="page" onClick={(() => addActiveClass())}>Resume</Link>
        </nav>

        <ul className="social-media">
          <a href="https://www.linkedin.com/in/rxi-prakharvrm" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
          <a href="https://www.github.com/rxi-prakharvrm" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
          <a href="https://x.com/PV7832pv" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a>
          <a href="https://www.instagram.com/rxi_prakharvrm" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
        </ul>
    </div>
  )
}

export default Navigation