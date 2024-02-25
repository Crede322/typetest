import React, { useContext, useEffect, useState, useRef } from "react";
import classes from "./Menu.module.css";
import List from "./List/List";
import Tab from "./List/Tabs/Tab.jsx";
import pasteImg from "../img/paste.svg";
import libImg from "../img/lib.svg";
import { TabContext } from "../context/TabContext.tsx";
import { fakerRU, fakerEN } from "@faker-js/faker";

const Menu = () => {
  const { toggleButton, lastKey, displayText, setDisplayText, afterBtn } =
    useContext(TabContext);
  const [generatedText, setGeneratedText] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [isLibraryPopupOpen, setIsLibraryPopupOpen] = useState();
  const [isLibraryMounted, setIsLibraryMounted] = useState(false);
  const [toggleSPM, setToggleSPM] = useState(0);
  const [pause, setPause] = useState(true);
  const [seconds, setSeconds] = useState(120);
  const [toggleTimerState, setToggleTimerState] = useState(false);
  const [timerEnd, setTimerEnd] = useState(false);
  const staticDisplayLength = useRef(0);
  const lastSPM = useRef(0);

  const handleClickClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setGeneratedText(toggleTimerState ? "" : text);
    } catch (error) {
      console.error("Ошибка при чтении буфера обмена", error);
    }
    setIsMounted(true);
    setIsLibraryMounted(true);
    setTimerEnd(!timerEnd);
    setPause(false);
    setIsLibraryPopupOpen(false);
    setToggleTimerState(false);
  };

  useEffect(() => {
    if (isMounted) {
      setDisplayText(generatedText);
      staticDisplayLength.current = generatedText.length;
      setSeconds(120);
    }
  }, [isMounted]);

  useEffect(() => {
    if (
      staticDisplayLength.current > displayText.length &&
      toggleButton === 1
    ) {
      setToggleTimerState(true);
    }
    setToggleSPM(staticDisplayLength.current - displayText.length);
    if (toggleButton === 2 && displayText.length === 0) {
      setDisplayText(generatedText);
    }
  }, [displayText]);

  let secondsInterval = useRef(null);
  useEffect(() => {
    if (toggleTimerState === true && toggleButton === 1) {
      secondsInterval.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds !== 0) {
            console.log(prevSeconds);
            return prevSeconds - 1;
          } else {
            setTimerEnd(!timerEnd);
            return prevSeconds;
          }
        });
      }, 500);
    }
  }, [toggleTimerState]);

  useEffect(() => {
    lastSPM.current = toggleSPM;
  }, [seconds]);

  useEffect(() => {
    setDisplayText("");
    setIsMounted(false);
    setToggleTimerState(false);
    staticDisplayLength.current = generatedText.length;
    clearInterval(secondsInterval.current);
  }, [timerEnd]);

  useEffect(() => {
    setGeneratedText("");
    setPause(true);
    setIsMounted(!isMounted);
    clearInterval(secondsInterval.current);
    setToggleTimerState(false);
  }, [afterBtn]);

  const handlePopupOne = () => {
    let text = "";
    while (text.length < 1000) {
      text += fakerRU.lorem.sentence();
    }
    setGeneratedText(text);
    setIsLibraryMounted(true);
    setTimerEnd(!timerEnd);
    setPause(false);
    setIsLibraryPopupOpen(false);
  };

  useEffect(() => {
    setIsLibraryMounted(false);
    setDisplayText(generatedText);
  }, [isLibraryMounted]);

  const handleLibraryClick = () => {
    setIsLibraryPopupOpen(!isLibraryPopupOpen);
  };

  const handlePopupTwo = () => {
    let text = "";
    while (text.length < 1000) {
      text += fakerEN.lorem.sentence();
    }
    setGeneratedText(text);
    setIsLibraryMounted(true);
    setTimerEnd(!timerEnd);
    setPause(false);
    setIsLibraryPopupOpen(false);
  };

  const handlePopupThree = () => {
    setGeneratedText(
      "import React useState = () => {} Component.module.css switch if else useContext setState() onClick !== return const import useEffect() function export case default break npm run test setTimeout map trim className type interface contextProvider style switch setState() default function type handleClick toggle return Array React.FC(props) id style useEffect setTimeout case else substring console.log let className === setState() interface handleClick Component  className={} aria npm start import React useState = () => {} Component.module.css switch if else useContext setState() onClick !== return const import useEffect() function export case default break npm run test setTimeout map trim className type interface contextProvider style switch setState() default function type handleClick toggle return Array React.FC(props) id style useEffect setTimeout case else substring console.log let className === setState() interface handleClick Component  className={} aria npm start",
    );
    setIsLibraryMounted(true);
    setTimerEnd(!timerEnd);
    setPause(false);
    setIsLibraryPopupOpen(false);
  };

  const closePopup = () => {
    setIsLibraryPopupOpen(false);
  };

  const switchTypeText =
    toggleButton === 0 ? (
      <div className={classes.lastKey}>
        <h2>{lastKey}</h2>
      </div>
    ) : toggleButton === 1 || 2 ? (
      pause ? (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div onClick={handleClickClipboard} className={classes.paste}>
            <img src={pasteImg} alt="paste text" />
          </div>
          <div onClick={handleLibraryClick} className={classes.library}>
            <img src={libImg} alt="libraryImage" />
          </div>
        </div>
      ) : (
        <pre>{displayText}</pre>
      )
    ) : null;

  return (
    <div>
      <div className={classes.typing}>
        <div className={classes.typing__buttons1}>
          <div className={classes.timer__wrapper}>
            <h2
              style={{
                display: toggleButton === 1 ? "block" : "none",
                margin: "6px 10px 0 0",
              }}
            >
              sp/m
              <br />
              &nbsp;&nbsp;&nbsp;
              {lastSPM.current === 0 ? toggleSPM : lastSPM.current}
            </h2>
            <div
              style={{
                display: toggleButton === 1 ? "block" : "none",
                willChange: "transform",
              }}
            >
              {toggleTimerState ? (
                <div className={classes.timer}>
                  <div className={classes.timer__line} />
                </div>
              ) : (
                <div className={classes.timer__off} />
              )}
            </div>
          </div>
        </div>
        <div className={classes.title}>
          {switchTypeText}
          <div
            style={{ display: pause ? "none" : "block" }}
            className={classes.typing__cursor}
          />
        </div>
        <div
          className={classes.popup__inner}
          style={{ display: isLibraryPopupOpen === true ? "block" : "none" }}
        >
          <ul className={classes.popup__list}>
            <li onClick={handlePopupOne}>
              <h2>Случайный текст на русском</h2>
            </li>
            <li onClick={handlePopupTwo}>
              <h2>Случайный текст на английском</h2>
            </li>
            <li onClick={handlePopupThree}>
              <h2>React & Frontend</h2>
            </li>
          </ul>
        </div>
        <div className={classes.typing__buttons2}>
          <div
            className={classes.popup}
            onClick={closePopup}
            style={{
              cursor: "pointer",
              display: isLibraryPopupOpen === true ? "block" : "none",
            }}
          ></div>
        </div>
      </div>
      <div className={classes.connector__wrapper}>
        <List />
        <div className={classes.tabOne}>
          <Tab />
        </div>
      </div>
    </div>
  );
};

export default Menu;
