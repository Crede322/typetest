import React, { useContext, useState } from 'react';
import classes from "./Main.module.css"
import './rawStyles.css'
import List from "./List/List"
import pasteImg from '../img/paste.svg'
import TabOne from './List/Tabs/TabOne/TabOne.jsx';
import { TabContext } from '../context/TabContext.tsx';

const Menu = () => {

const {toggleButton, lastKey, displayText, setDisplayText} = useContext(TabContext);

  const switchTypeText = toggleButton === 0 ? (
    <div className={classes.lastKey}><h2>{lastKey}</h2></div>
  ) : toggleButton === 1 ? (
    <pre>{displayText}</pre>
  ) : toggleButton === 2 ? (
    <pre>{displayText}</pre>
  ) : toggleButton === 3 ? (
    <pre>{displayText}</pre>
  ) : null;

const handleClickClipboard = () => {
  setDisplayText('текст из буфера обмена')
  console.log('вставлено из буфера обмена')
};

const testbtn = () => {
        const newDisplayText = displayText.substring(1);
        setDisplayText(newDisplayText);
} 
    return (
        <div>
            <div>
                <div className={classes.typing}>
                    <div className={classes.title}>
                        {switchTypeText}
                    </div>
                    <div onClick={testbtn}>кнопка теста</div>
                    <div
                    onClick={handleClickClipboard}
                    style={{display: toggleButton === 0 ? 'none' : 'block', transition:'all 0.6s'}} 
                    className={classes.paste}><img src={pasteImg} 
                    alt="paste text"/>
                    </div>
                </div>
                <List />
                <div>
                    <div className={classes.tabOne}><TabOne/></div>
                </div>
            </div>
        </div>
    );
};

export default Menu;