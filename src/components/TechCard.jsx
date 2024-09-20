// eslint-disable-next-line react/prop-types
const TechCard = ({ icon, name }) => {
  return (
    <div className="tech-card">
        <div className="tech-icon">{icon}</div>
        <div className="tech-name">{name}</div>
    </div>
  )
}

export default TechCard