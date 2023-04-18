import {Fade, Slide} from "react-reveal";
import "../assets/css/EducationCard.css";

// Component for showing education details
export default function EducationCard(props) {
  return (
    <div>
      <Fade left duration={1000}>
        <div className="education-card">
          <div className="education-card-left">
            <img
              crossOrigin={"anonymous"}
              className="education-roundedimg"
              src={props.schoolLogo}
              alt={props.schoolName}
            />
          </div>
          <div className="education-card-right">
            <h5 className="education-text-school">{props.schoolName}</h5>

            <div className="education-text-details">
              <h5 className="education-text-subHeader">{props.subHeader}</h5>
              <p className="education-text-duration">{props.duration}</p>
              <p className="education-text-desc">{props.desc}</p>
              <div className="education-text-bullets"></div>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
}
