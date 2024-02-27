import React, { useContext, useEffect, useState, useRef } from "react";
import classes from "./Menu.module.css";
import List from "./List/List";
import Tab from "./List/Tabs/Tab.jsx";
import pasteImg from "../img/paste.svg";
import libImg from "../img/lib.svg";
import refreshImg from "../img/refresh.svg";
import { TabContext } from "../context/TabContext.tsx";
import { fakerRU } from "@faker-js/faker";

const Menu = () => {
  const { toggleButton, lastKey, displayText, setDisplayText, afterBtn } =
    useContext(TabContext);
  const [generatedText, setGeneratedText] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [isLibraryPopupOpen, setIsLibraryPopupOpen] = useState();
  const [isLibraryMounted, setIsLibraryMounted] = useState(false);
  const [toggleSPM, setToggleSPM] = useState(0);
  const staticDisplayLength = useRef(0);
  const lastSPM = useRef(0);
  const [preTitleText, setPreTitleText] = useState("Выберите режим :");

  // стейты с таймерами
  const [seconds, setSeconds] = useState(120);
  const [toggleTimerState, setToggleTimerState] = useState(false);
  const [pause, setPause] = useState(true);
  const [timerEnd, setTimerEnd] = useState(false);
  const [showTimer, setShowTimer] = useState(false);

  // кнопка буфера обмена
  const handleClickClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text.length < 10) {
        setPreTitleText("too short text length!");
      } else if (text.length > 10) {
        setGeneratedText(toggleTimerState ? "" : text);
        setIsMounted(true);
        setIsLibraryMounted(true);
        setTimerEnd(!timerEnd);
        setPause(false);
        setToggleTimerState(false);
        setShowTimer(true);
      }
    } catch (error) {
      console.error("Ошибка при чтении буфера обмена", error);
    }
  };

  //монтирование после нажатия (like a switcher)
  useEffect(() => {
    if (isMounted) {
      setDisplayText(generatedText);
      staticDisplayLength.current = generatedText.length;
      setSeconds(120);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted]);

  //детект изменения displayText, и применимые к ситуации действия
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayText]);

  //таймер
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleTimerState]);

  // обновление текущего spm
  useEffect(() => {
    lastSPM.current = toggleSPM;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  //сброс таймера
  useEffect(() => {
    setDisplayText("");
    setIsMounted(false);
    setToggleTimerState(false);
    staticDisplayLength.current = generatedText.length;
    clearInterval(secondsInterval.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerEnd]);

  //сброс общих значений
  useEffect(() => {
    setGeneratedText("");
    setPause(true);
    setIsMounted(!isMounted);
    clearInterval(secondsInterval.current);
    setToggleTimerState(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [afterBtn]);

  //детект при монтаже конкретно в этом случае нужен для корректного изменения displayText на значение взятое из generatedText
  useEffect(() => {
    setIsLibraryMounted(false);
    setDisplayText(generatedText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLibraryMounted]);

  //ниже функции на кнопках
  const handleLibraryClick = () => {
    setIsLibraryPopupOpen(!isLibraryPopupOpen);
  };

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
    setShowTimer(true);
  };

  const handlePopupTwo = () => {
    setGeneratedText(
      "The foundation of any successful business lies in providing goods or services that meet the needs of customers. Understanding your target audience and offering products that align with their expectations is crucial for sustained success in the market.Staying informed and analyzing market trends are key factors in business success. Understanding the competitive landscape, crafting effective marketing strategies, and adapting to changes are all essential in gaining a competitive advantage.Financial management is also integral to running a business. It involves budget planning, expense control, and strategic investments to ensure financial stability and growth.However, the path to success in business is not always smooth. Challenges and setbacks are inevitable. The ability to adapt, problem-solve, and learn from failures is crucial to keep moving forward.Moreover, business plays a significant social role, influencing employment, economic growth, and societal well-being. Corporate social responsibility has become increasingly relevant, with companies actively investing resources into social and environmental initiatives.Overall, business is a complex and dynamic field that requires effort, knowledge, and skills. It creates opportunities for growth and prosperity, serving as an integral part of modern society.",
    );
    setIsLibraryMounted(true);
    setTimerEnd(!timerEnd);
    setPause(false);
    setIsLibraryPopupOpen(false);
    setShowTimer(true);
  };

  const handlePopupThree = () => {
    setGeneratedText(
      "import React useState = () => {} Component.module.css switch if else useContext setState() onClick !== return const import useEffect() function export case default break npm run test setTimeout map trim className type interface contextProvider style switch setState() default function type handleClick toggle return Array React.FC(props) id style useEffect setTimeout case else substring console.log let className === setState() interface handleClick Component  className={} aria npm start import React useState = () => {} Component.module.css switch if else useContext setState() onClick !== return const import useEffect() function export case default break npm run test setTimeout map trim className type interface contextProvider style switch setState() default function type handleClick toggle return Array React.FC(props) id style useEffect setTimeout case else substring console.log let className === setState() interface handleClick Component className={} aria npm start onClick !== return const import useEffect() function export case default break npm run test setTimeout map trim className type interface",
    );
    setIsLibraryMounted(true);
    setTimerEnd(!timerEnd);
    setPause(false);
    setIsLibraryPopupOpen(false);
  };

  const closePopup = () => {
    setIsLibraryPopupOpen(false);
  };

  const handleClickRefresh = () => {
    setPreTitleText("Выберите режим :");
    setIsMounted(false);
    setToggleTimerState(false);
    staticDisplayLength.current = generatedText.length;
    clearInterval(secondsInterval.current);
    setPause(true);
    setToggleTimerState(false);
    setToggleSPM(0);
  };

  // рендер
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
      <div
        className={classes.pre__title}
        style={{
          transition: "all, 0.4s",
          margin: "auto",
          width: "240px",
          fontSize: "24px",
          textWrap: "nowrap",
          marginBottom: "10px",
          opacity: toggleButton === 0 || showTimer ? "0" : "1",
          cursor: "default",
          fontWeight: 500,
        }}
      >
        <h2>{preTitleText}</h2>
      </div>
      <div className={classes.typing}>
        <div style={{ display: "flex", margin: "auto" }}>
          <div className={classes.typing__buttons1}>
            <div className={classes.timer__wrapper}>
              <h2
                style={{
                  display: toggleButton === 1 && showTimer ? "block" : "none",
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
                  display: toggleButton === 1 && showTimer ? "block" : "none",
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
          <div
            className={classes.title}
            style={{
              transition: "all, 0.9s",
              width: pause ? "250px" : "600px",
            }}
          >
            {switchTypeText}
            <div
              style={{
                display: pause ? "none" : "block",
              }}
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
                <h2>Текст на английском</h2>
              </li>
              <li onClick={handlePopupThree}>
                <h2>React & Frontend</h2>
              </li>
            </ul>
          </div>
          <div className={classes.typing__buttons2}>
            <button
              onClick={handleClickRefresh}
              className={classes.refresh}
              style={{
                transition: "all, 0.8s",
                opacity: pause ? "0" : "1",
                cursor: pause ? "default" : "pointer",
              }}
              disabled={pause ? true : false}
            >
              <img src={refreshImg} alt="refresh img" />
            </button>
          </div>
        </div>
      </div>
      <div className={classes.connector__wrapper}>
        <List />
        <div className={classes.tabOne}>
          <Tab />
        </div>
      </div>

      {/* popup */}
      <div
        className={classes.popup}
        onClick={closePopup}
        style={{
          cursor: "pointer",
          display: isLibraryPopupOpen === true ? "block" : "none",
        }}
      />
    </div>
  );
};

export default Menu;
