import React, { useState } from "react";
// import PropTypes from 'prop-types';
import "./StoryMode.scss";
import storyBg from "../../Assets/StoryModeBg.gif";
import { StoryModeLogo, Grass, character } from "../../Assets/Constants";
import { getWord } from "../../Utils/getWord";

function StoryMode(props) {
  const [currentWord, setCurrentWord] = useState("");
  const [playerWordList, setPlayerWordList] = useState([]);
  const [machineWordList, setMachineWordList] = useState([]);

  return (
    <div className="StoryModeWrapper">
      <img
        className="App__backgroundAnimation"
        alt="Background Animation"
        src={storyBg}
      />
      <div className="StoryModeWrapper__container">
        <div className="StoryModeWrapper__top">
          <img src={StoryModeLogo} alt="StoryModeLogo" />
        </div>
        <div className="StoryModeWrapper__bottom">
          <img
            src={character}
            alt="character"
            className="StoryModeWrapper__character"
          />
          <img src={Grass} alt="Grass" className="StoryModeWrapper__grass" />
          <div className="StoryModeWrapper__listContainer">
            <div className="StoryModeWrapper__listContainer--left">
              {playerWordList.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <div className="StoryModeWrapper__listContainer--right">
              {machineWordList.map((item, index) => (
                <p key={index}>{item.word}</p>
              ))}
            </div>
          </div>
          <input
            className="StoryModeWrapper__input"
            placeholder="Type your word..."
            onChange={(e) => setCurrentWord(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setPlayerWordList([...playerWordList, currentWord]);

                document.querySelector(".StoryModeWrapper__input").value = "";

                const result = getWord(
                  currentWord.charAt(currentWord.length - 1),
                  [
                    ...playerWordList.map((item) => item.word),
                    ...machineWordList.map((item) => item.word),
                  ]
                );
                console.log(result);

                setMachineWordList([...machineWordList, result]);
               
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

StoryMode.propTypes = {
  // bla: PropTypes.string,
};

StoryMode.defaultProps = {
  // bla: 'test',
};

export default StoryMode;
