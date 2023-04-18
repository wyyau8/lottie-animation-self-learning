import ProjectCard from "../components/ProjectCard";
import "../assets/css/Projects.css";
import { Fade } from "react-reveal";

export default function Projects() {
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="projects-section" id="projects">
        <div>
          <h1 className="projects-heading">Projects</h1>
          <p className="subTitle project-subtitle">My Recent Works</p>

          <div className="projects-container">
            {/* Projects */}
            <ProjectCard
              projectName="Magazine Mock Up"
              projectImage={require("../assets/images/Magazine_MockUp_Ed_1.png")}
              projectDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <ProjectCard
              projectName="UX/UI Design"
              projectImage={require("../assets/images/NXR_interface_2.png")}
              projectDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
