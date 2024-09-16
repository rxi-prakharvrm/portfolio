import React from 'react'
import TechCard from './TechCard'

const Technologies = () => {
  return (
    <div className="content-section technologies-ctr">
      <div className="col-1">
        <TechCard icon={<i class="devicon-html5-plain colored"></i>} name="HTML" />
        <TechCard icon={<i class="devicon-css3-plain colored"></i>} name="CSS" />
        <TechCard icon={<i class="devicon-javascript-plain colored"></i>} name="JavaScript" />
        <TechCard icon={<i class="devicon-react-original colored"></i>} name="React" />
        <TechCard icon={<i class="devicon-tailwindcss-original colored"></i>} name="Tailwind CSS" />
        <TechCard icon={<i class="devicon-git-plain colored"></i>} name="Git" />
        <TechCard icon={<i class="devicon-github-original colored"></i>} name="Github" />
        <TechCard icon={<i class="devicon-html5-plain colored"></i>} name="HTML" />
      </div>
      <div className="col-2">
        <TechCard icon={<i class="devicon-mysql-original colored"></i>} name="MySQL" />
        <TechCard icon={<i class="devicon-mongodb-plain colored"></i>} name="MongoDB" />
        <TechCard icon={<i class="devicon-bash-plain colored"></i>} name="Bash Scripting" />
        <TechCard icon={<i class="devicon-express-original colored"></i>} name="Express" />
        <TechCard icon={<i class="devicon-npm-original-wordmark colored"></i>} name="NPM" />
        <TechCard icon={<i class="devicon-nodejs-plain colored"></i>} name="Node.js" />
        <TechCard icon={<i class="devicon-mysql-original colored"></i>} name="MySQL" />
      </div>
      <div className="col-3">
        <TechCard icon={<i class="devicon-c-plain colored"></i>} name="C" />
        <TechCard icon={<i class="devicon-cplusplus-plain colored"></i>} name="C++" />
        <TechCard icon={<i class="devicon-c-plain colored"></i>} name="C" />
        <TechCard icon={<i class="devicon-python-plain colored"></i>} name="Python" />
        <TechCard icon={<i class="devicon-java-plain colored"></i>} name="Java" />
      </div>
    </div>
  )
}

export default Technologies