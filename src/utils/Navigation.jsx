import { Link } from 'react-router-dom'
import SocialMedia from '../components/SocialMedia'
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
          {/* <h1 className="name"><AnimatedText text="Prakhar Verma" /></h1> */}
          <h1 className="name">Prakhar Verma</h1>
          <h3 className="job"><AnimatedText text="MCA'25 Student at DU" /></h3>
          {/* <p className="desc">I build pixel-perfect, engaging, <br /> and accessible digital experiences.</p> */}
        </div>

        <nav className="nav-links">
          <Link to="/" className="page active" onClick={(() => addActiveClass())}>About</Link>
          <Link to="/projects" className="page" onClick={(() => addActiveClass())}>Projects</Link>
          <Link to="/technologies" className="page" onClick={(() => addActiveClass())}>Technologies</Link>
        </nav>

        <SocialMedia />
    </div>
  )
}

export default Navigation
