import "../assets/css/About.css";
import EducationCard from "../components/EducationCard";
import {Fade} from "react-reveal";


export default function About() {
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="education-section" id="education">
        <h1 className="education-heading">Education</h1>
        <div className="education-card-container">
          {/* Educations */}
          <EducationCard
            schoolName="Seneca College"
            schoolLogo={require("../assets/images/seneca-logo.png")}
            subHeader="Diploma, Interactive Media Design"
            duration="Sep 2021 - Apr 2023"
            desc="Skills: User Experience (UX) · User Interface Design · Adobe Photoshop · Adobe Illustrator · Adobe XD · Adobe InDesign · Adobe Premiere Pro · Adobe After Effects · Adobe Lightroom"
          />

          <EducationCard
            schoolName="Hong Kong Baptist University"
            schoolLogo={require("../assets/images/hkbu-logo.png")}
            subHeader="Bachelor of Social Sciences (Hons.) in Communication – Journalism Option, Broadcast Journalism"
            duration="2013 - 2015"
            desc='Activities and societies: Filmed and directed documentary "Happy Selfie Time (快樂自拍時代)" with my partner Sun Ming Wai'
          />
        </div>
      </div>
    </Fade>
  );
}
