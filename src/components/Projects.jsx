import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className="content-section projects-ctr">
      <ProjectCard 
        projectImg="brakshamchemicals.png" 
        projectName="Braksham Chemicals" 
        projectLink="https://www.brakshamchemicals.com" 
        projectDesc="Braksham Chemicals manufactures high-quality tiles using the latest equipment and machinery." 
        projectTechStack={["React.js", "JS", "HTML", "CSS"]} 
      />

      <ProjectCard 
        projectImg="rxi-stylesynth.png" 
        projectName="RXI-StyleSynth" 
        projectLink="https://rxi-prakharvrm.github.io/rxi-stylesynth" 
        projectDesc="A GUI tool to apply styles and generate CSS for web projects." 
        projectTechStack={["React.js", "JS", "HTML", "CSS"]} 
      />

      <ProjectCard 
        projectImg="codeauction.png" 
        projectName="CodeAuction" 
        projectLink="https://codeauction.onrender.com" 
        projectDesc="A bidding platform for live coding competitions, built with a full-stack approach." 
        projectTechStack={["Node.js", "Socket.io", "MongoDB", "JS", "EJS"]} 
      />

      <ProjectCard 
        projectImg="thespicymeal.png" 
        projectName="The Spicy Meal" 
        projectLink="https://thespicymeal.vercel.app" 
        projectDesc="An online food ordering website built to learn and implement React.js concepts." 
        projectTechStack={["React.js", "JS", "HTML", "CSS", "API Integration"]} 
      />

      <ProjectCard 
        projectImg="portfolio.png" 
        projectName="Portfolio" 
        projectLink="https://rxi-prakharvrm.vercel.app" 
        projectDesc="A personal portfolio showcasing skills, projects, and experience in web development." 
        projectTechStack={["React.js", "JS", "HTML", "CSS"]} 
      />

      <ProjectCard 
        projectImg="sankalan.png" 
        projectName="Sankalan" 
        projectLink="https://sankalan.ducs.in" 
        projectDesc="The annual tech fest website of DUCS, featuring event details and registration." 
        projectTechStack={["HTML", "CSS", "JS", "Next.js"]} 
      />
    </div>
  )
}

export default Projects