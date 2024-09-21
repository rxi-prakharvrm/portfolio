import React, { useState, useEffect } from 'react'

const About = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1000);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  })

  return (
    <div className="content-section about-section">
      <div className="portfolio-img-ctr">
        <img src="images/prakhar.png" alt="Prakhar Verma" />
      </div>
      {
        isSmallScreen ?
        <h1 className="name">Prakhar Verma</h1> :
        null
      }
      <div className="portfolio-username">@rxi-prakharvrm</div>
      <div className="portfolio-desc">I build <strong>pixel-perfect</strong>, engaging, and accessible digital experiences.</div>
      <a href="/pdfs/resume.pdf" target="_blank" className="resume-btn">Resume</a>

      {/* <p className="portfolio-desc">
        I am a passionate front-end web developer with a strong command of <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>React.js</strong>. I specialize in creating visually appealing, responsive, and user-friendly interfaces that enhance user experience.
      </p> */}
    </div>
  )
}

export default About