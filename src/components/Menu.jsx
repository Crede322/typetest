import React, { useContext, useEffect, useState, useRef } from 'react';
import classes from "./Menu.module.css"
import List from "./List/List"
import pasteImg from '../img/paste.svg'
import libImg from '../img/lib.svg'
import Tab from './List/Tabs/Tab.jsx';
import { TabContext } from '../context/TabContext.tsx';
import { faker } from '@faker-js/faker'

const Menu = () => {

const {toggleButton, lastKey, displayText, setDisplayText} = useContext(TabContext);
const [isLibraryPopupOpen, setIsLibraryPopupOpen] = useState();
const [isMounted, setIsMounted] = useState(false);
const [toggleTimerState, setToggleTimerState] = useState(false);
const [seconds, setSeconds] = useState(120);
const [toggleSPM, setToggleSPM] = useState(0)
const staticDisplayLength = useRef(0);

  const switchTypeText = toggleButton === 0 ? (
    <div className={classes.lastKey}><h2>{lastKey}</h2></div>
  ) : toggleButton === 1 ? (
    <pre>{displayText}</pre>
  ) : toggleButton === 2 ? (
    <pre>{displayText}</pre>
  ) : toggleButton === 3 ? (
    <pre>{displayText}</pre>
  ) : null;

const handleClickClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setDisplayText(text);
    } catch (error) {
      console.error('Ошибка при чтении буфера обмена:', error);
    }
    setSeconds(120);
    setToggleTimerState(false);
    setIsMounted(true);
  };

useEffect(() => {
  staticDisplayLength.current = displayText.length
}, [isMounted])

useEffect(() => {
  if (displayText.length < staticDisplayLength.current) {
    setToggleTimerState(true);
  } else if (displayText.length === 1) {
    setToggleTimerState(false);
    setSeconds(120);
  }
}, [displayText])
  
useEffect(() => {
  let SPMinterval;

  if (toggleTimerState) {
    SPMinterval = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds === 0) {
          clearInterval(SPMinterval);
          setSeconds(120);
          setToggleTimerState(false);
          return 120;
        }
        return prevSeconds - 1;
      });
    }, 500);
  }

  return () => {
    clearInterval(SPMinterval);
  };
}, [toggleTimerState]);

  useEffect(() => {
    setToggleSPM(staticDisplayLength.current - displayText.length)
  }, [seconds])

function generateRandomSentence(sentencesCount) {
  const sentences = [];
  for (let i = 0; i < sentencesCount; i++) {
    const sentence = [];
    sentence.push(faker.commerce.productAdjective());
    sentence.push(faker.commerce.productMaterial());
    sentence.push(faker.commerce.productName());
    sentences.push(sentence.join(' '));
  }
  return sentences;
}

const handleRandomClick = () => {
    setDisplayText(generateRandomSentence(20).join(' '));
    console.log(displayText);
    setIsLibraryPopupOpen(!isLibraryPopupOpen);
}

const handleLibraryClick = () => {
  setIsLibraryPopupOpen(!isLibraryPopupOpen);
}

const handlePopup = () => {
  setIsLibraryPopupOpen(!isLibraryPopupOpen);
  setDisplayText('import React useState = () => {} Component.module.css switch if else useContext setState() onClick !== return const import useEffect() function export case default break npm run test setTimeout map trim className type interface contextProvider style switch setState() default function type handleClick toggle return Array React.FC(props) id style useEffect setTimeout case else substring console.log let className === setState() interface handleClick Component  className={} aria npm start');
}

const closePopup = () => {
  setIsLibraryPopupOpen(false);
}

    return (
      <div>
          <div>
              <div className={classes.typing}>
                  <div className={classes.typing__buttons1}>
                    <div className={classes.timer__wrapper}>
                    {toggleTimerState ?
                        <div className={classes.timer}>
                        <div className={classes.timer__line}/>
                        </div>: 
                      <div className={classes.timer__off}/>}
                    <h2>sp/m {toggleSPM}</h2>
                    </div>
                  </div>
                  <div className={classes.title}>
                      {switchTypeText}
                  </div>

                    <div className={classes.popup__inner} style={{display: isLibraryPopupOpen === true ? 'block' : 'none'}}>
                      <ul className={classes.popup__list}>
                        <li onClick={handleRandomClick}><h2>Случайный текст на английском</h2></li>
                        <li onClick={handlePopup}><h2>text</h2></li>
                        <li onClick={handlePopup}><h2>React & Frontend</h2></li>
                        <li onClick={handlePopup}><h2>text</h2></li>
                      </ul>
                    </div>

                  <div className={classes.typing__buttons2}>
                    <div
                    onClick={handleClickClipboard}
                    style={{display: toggleButton === 0 ? 'none' : 'block', transition:'all 0.6s'}} 
                    className={classes.paste}>
                    <img src={pasteImg} 
                    alt="paste text"/>
                    </div>
                    <div onClick={handleLibraryClick}
                    style={{display: toggleButton === 0 ? 'none' : 'block', transition:'all 0.6s'}}
                    className={classes.library}>
                    <img src={libImg}
                    alt="libraryImage"/>
                    </div>
                    <div className={classes.popup} onClick={closePopup} style={{cursor: 'pointer' ,display: isLibraryPopupOpen === true ? 'block' : 'none'}}></div>
                  </div>
              </div>

              <div className={classes.connector__wrapper}>
              <List />
                  <div className={classes.tabOne}><Tab/></div>
              </div>
          </div>
      </div>
    );
};

export default Menu;