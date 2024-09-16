import React from 'react'

const ProjectCard = ({projectImg, projectName, projectLink, projectDesc, projectTechStack}) => {
  return (
    <div className="project-card">
        <div className="project-img-ctr">
            <div className="project-img-inner-ctr">
                <img src={`images/${projectImg}`} alt="" className="project-img" />
                <img src={`images/dummy.jpg`} alt="" className="project-dummy-img" />
            </div>
        </div>
        <div className="project-content-ctr">
            <a href={projectLink} target="_blank" rel="noreferrer" className="project-link"><h3 className="project-name">{projectName}</h3><i className="fa fa-link"></i></a>
            <p className="project-desc">{projectDesc}</p>
            <ul className="project-tech-stack">
                {projectTechStack.map((tech, index) => (
                    <li key={index} className="project-tech">{tech}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default ProjectCard