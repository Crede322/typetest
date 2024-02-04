import React, { useContext, useState } from 'react';
import classes from "./Menu.module.css"
import List from "./List/List"
import pasteImg from '../img/paste.svg'
import randomImg from '../img/random.svg'
import TabOne from './List/Tabs/TabOne/TabOne.jsx';
import { TabContext } from '../context/TabContext.tsx';
import { fakerRU as faker } from '@faker-js/faker'

const Menu = () => {

const {toggleButton, lastKey, displayText, setDisplayText} = useContext(TabContext);
const [isLibraryPopupOpen, setIsLibraryPopupOpen] = useState();

  const generateRandomText = () => {
      let randomText = '';
    while (randomText.length < 1000) {
      randomText += faker.lorem.words();
    }
    randomText = randomText.substring(0, 1000);
    console.log(randomText);
  }

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
    generateRandomText();
  };

const handleLibraryClick = () => {
  setIsLibraryPopupOpen(!isLibraryPopupOpen);
}

const handlePopup = () => {
  setIsLibraryPopupOpen(!isLibraryPopupOpen);
  setDisplayText('import React useState = () => {} Component.module.css switch if else useContext setState() onClick !== return const import useEffect() function export case default break npm run test setTimeout map trim className type interface contextProvider style switch setState() default function type handleClick toggle return Array React.FC(props) id style useEffect setTimeout case else substring console.log let className === setState() interface handleClick Component  className={} aria npm start');
}

    return (
      <div>
          <div>
              <div className={classes.typing}>

                  <div className={classes.typing__buttons1} style={{display: toggleButton === 0 ? 'none' : 'block', transition:'all 0.6s'}}></div>

                  <div className={classes.title}>
                      {switchTypeText}
                  </div>

                    <div className={classes.popup__inner} style={{display: isLibraryPopupOpen === true ? 'block' : 'none'}}>
                      <ul className={classes.popup__list}>
                        <li onClick={handlePopup}><h2>text</h2></li>
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
                    <img src={randomImg}
                    alt="libraryImage"/>
                    </div>
                    <div className={classes.popup} onClick={handlePopup} style={{cursor: 'pointer' ,display: isLibraryPopupOpen === true ? 'block' : 'none'}}></div>
                  </div>
              </div>

              <div className={classes.connector__wrapper}>
              <List />
                  <div className={classes.tabOne}><TabOne/></div>
              </div>
          </div>
      </div>
    );
};

export default Menu;