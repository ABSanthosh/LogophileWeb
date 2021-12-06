import "./Home.scss";
import homeBg from "../../Assets/SingleplayerBG.gif";
import { MainLogo, StoryModeLogo, MultiplayerMode } from "../../Assets/Constants";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="App">
      <img
        className="App__backgroundAnimation"
        alt="Background Animation"
        src={homeBg}
      />
      <div className="App__container">
        <img className="App__MainLogo" src={MainLogo} alt="MainLogo" />
        <div className="App__bottom">
          <div className="App__Modes">
            <Link to="/story">
              <img src={StoryModeLogo} alt="StoryModeLogo" />
            </Link>
            <Link to="/multiplayer">
              <img src={MultiplayerMode} alt="MultiplayerMode" />
            </Link>
          </div>
          <div className="App__options"></div>
        </div>
      </div>
    </div>
  );
}
