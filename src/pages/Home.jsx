import "../assets/css/Home.css";
import {Fade} from "react-reveal";

export default function Home() {
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">
                {" "}
                {"Hi all, I'm Wing"} <span className="wave-emoji"></span>
              </h1>
              <p className="greeting-text-p subTitle">
                {
                  "A creative, energetic and detail-oriented interactive media designer. I am passionate in creating innovative, inspiring and meaningful design projects for everyone’s better life and good causes."
                }
              </p>
            </div>
          </div>
          <div className="greeting-image-div">
            <img src={require("../assets/images/wing.png")}></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
