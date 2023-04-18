import "../assets/css/ProjectCard.css";
// Component for showing project details
export default function ProjectCard(props) {
  return (
    <div className="project-card project-card-light">
      <div className="project-image">
        <img
          src={props.projectImage}
          alt={props.projectName}
          className="card-image"
        ></img>
      </div>
      <div className="project-detail">
        <h5 className="card-title">{props.projectName}</h5>
        <br/>
        <p className="card-subtitle">{props.projectDesc}</p>
      </div>
    </div>
  );
}
