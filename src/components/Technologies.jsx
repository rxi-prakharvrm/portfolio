import TechCard from './TechCard'

const Technologies = () => {
  return (
    <div className="content-section technologies-ctr">
      <h1 className="technologies-header">Tech Skills</h1>
      <div className="technologies-inner-ctr">
        <TechCard icon={<i className="devicon-html5-plain colored"></i>} name="HTML" />
        <TechCard icon={<i className="devicon-css3-plain colored"></i>} name="CSS" />
        <TechCard icon={<i className="devicon-javascript-plain colored"></i>} name="JavaScript" />
        <TechCard icon={<i className="devicon-react-original colored"></i>} name="React" />
        <TechCard icon={<i className="devicon-tailwindcss-original colored"></i>} name="Tailwind CSS" />
        <TechCard icon={<i className="devicon-git-plain colored"></i>} name="Git" />
        <TechCard icon={<i className="devicon-github-original colored"></i>} name="Github" />
        <TechCard icon={<i className="devicon-mysql-original colored"></i>} name="MySQL" />
        <TechCard icon={<i className="devicon-nodejs-plain colored"></i>} name="Node.js" />
        <TechCard icon={<i className="devicon-c-plain colored"></i>} name="C" />
        <TechCard icon={<i className="devicon-cplusplus-plain colored"></i>} name="C++" />
        <TechCard icon={<i className="devicon-python-plain colored"></i>} name="Python" />
        <TechCard icon={<i className="devicon-java-plain colored"></i>} name="Java" />
      </div>
    </div>
  )
}

export default Technologies