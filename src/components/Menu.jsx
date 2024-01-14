import React, { useContext } from 'react';
import classes from "./Main.module.css"
import './rawStyles.css'
import List from "./List/List"

import TabOne from './List/Tabs/TabOne/TabOne.jsx';
import TabTwo from './List/Tabs/TabTwo/TabTwo.jsx';
import TabThree from './List/Tabs/TabThree/TabThree.jsx';
import TabFour from './List/Tabs/TabFour/TabFour.jsx';

import { TabContext } from '../context/TabContext.tsx';

const Menu = () => {

const { toggleButton } = useContext(TabContext);

    return (
        <div>
            <div className={classes.wrapper}>
                <div className={classes.title}>
                    <h2>asdasd</h2>
                </div>
                <List />
                <div className='tabs'>
                    <div style={toggleButton === 0 ? {display:'block'} : {display:'none'}}><TabOne /></div>
                    <div style={toggleButton === 1 ? {display:'block'} : {display:'none'}}><TabTwo /></div>
                    <div style={toggleButton === 2 ? {display:'block'} : {display:'none'}}><TabThree /></div>
                    <div style={toggleButton === 3 ? {display:'block'} : {display:'none'}}><TabFour /></div>
                </div>
                {/* после меню добавить блок с детектором нажатых клавиш */}
            </div>
        </div>
    );
};

export default Menu;