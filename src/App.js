import React from "react";
import "./App.css";
import Fade from "react-reveal/Fade";
import { ParallaxProvider } from "react-scroll-parallax";
import NormalClock from "./components/NormalClock/NormalClock.js";
import MainWrapper, {
  NormalClockWrapper,
  LogoImageContainer,
} from "./assets/styles.style";

import LogoImage from "./assets/static/images/logoidc.png";

function App() {
  const deadline = new Date(2022, 11, 27, 19, 0, 0, 0);
  return (
    <div className="App">
      <ParallaxProvider>
        <React.Fragment>
          <MainWrapper>
            <LogoImageContainer>
              <div>
                <a>
                  <img src={LogoImage} alt="logo" />
                </a>
              </div>
              <h2> MỘT HÀNH TRÌNH VƯƠN XA</h2>
              <p>Hanoi Opera House</p>
              <h6 className="hello">
                Quý vị có thể xem lại sự kiện bằng đường link dưới đây
              </h6>
              <div style={{ fontSize: "25px", marginBottom: "10px" }}>
                <a
                  rel="nofollow"
                  href="https://www.youtube.com/watch?v=8Xe5uLEm83Y"
                >
                  <h6 className="link">LINK VIDEO YOUTUBE</h6>
                </a>
                <br />
                <a
                  rel="nofollow"
                  href="https://drive.google.com/drive/folders/1MHhq1czmK9aM-1wLOiz3VKzkWhsIcsX8"
                >
                  <h6 className="link1">LINK ẢNH</h6>
                </a>
              </div>
              <iframe
                className="video"
                src="https://drive.google.com/file/d/148k-AfmFtBL7uEbrg_MxsbkUcNHCbyEf/preview"
                width="390"
                height="230"
                allow="autoplay"
              ></iframe>
            </LogoImageContainer>
          </MainWrapper>
        </React.Fragment>
      </ParallaxProvider>
    </div>
  );
}

export default App;
