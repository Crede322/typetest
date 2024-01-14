import React from 'react';
import classes from "./List.module.css"
import { useContext } from 'react';

import { TabContext } from '../../context/TabContext.tsx'

const List = () => {

const { toggleButton, setToggleButton } = useContext(TabContext);


const btnOne = () => {
    setToggleButton(0)
    console.log('1')
}
const btnTwo = () => {
    setToggleButton(1)
    console.log('2')
}
const btnThree = () => {
    setToggleButton(2)
    console.log('3')
}
const btnFour = () => {
    setToggleButton(3)
    console.log('4')
}

    return (
        <div>
            <div className={classes.list__wrapper}>
                <ul className={classes.list}>
                    <li>
                        <button onClick={btnOne} className={`${classes.list__button} ${toggleButton === 0 ? classes.button__one : null}`}>
                            Тест
                        </button>
                    </li>
                    <li>
                        <button onClick={btnTwo} className={`${classes.list__button} ${toggleButton === 1 ? classes.button__two : null}`}>
                            1 минута
                        </button>
                    </li>
                    <li>
                        <button onClick={btnThree} className={`${classes.list__button} ${toggleButton === 2 ? classes.button__three : null}`}>
                            Без ограничений
                        </button>
                    </li>
                    <li>
                        <button onClick={btnFour} className={`${classes.list__button} ${toggleButton === 3 ? classes.button__four : null}`}>
                            Рандом
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default List;