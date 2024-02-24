import React from "react";
import classes from "./List.module.css";
import { useContext } from "react";
import { TabContext } from "../../context/TabContext.tsx";

const List = () => {
  const {
    toggleButton,
    setToggleButton,
    setMainColor,
    setDisplayText,
    afterBtn,
    resqetAfterBtn,
  } = useContext(TabContext);

  const btnOne = () => {
    setToggleButton(0);
    console.log("1");
    setMainColor("rgba(53, 29, 163, 0.7)");
    resetAfterBtn(!afterBtn);
  };
  const btnTwo = () => {
    setToggleButton(1);
    console.log("2");
    setMainColor("rgba(0, 39, 211, 0.7)");
    resetAfterBtn(!afterBtn);
  };
  const btnThree = () => {
    setToggleButton(2);
    console.log("3");
    setMainColor("rgba(255, 0, 0, 0.9)");
    resetAfterBtn(!afterBtn);
  };

  return (
    <div>
      <div className={classes.list__wrapper}>
        <ul className={classes.list}>
          <li>
            <button
              onClick={btnOne}
              className={`${classes.list__button} ${
                toggleButton === 0 ? classes.button__one : null
              }`}
            >
              Тест клавиш
            </button>
          </li>
          <li>
            <button
              onClick={btnTwo}
              className={`${classes.list__button} ${
                toggleButton === 1 ? classes.button__two : null
              }`}
            >
              1 минута
            </button>
          </li>
          <li>
            <button
              onClick={btnThree}
              c
              className={`${classes.list__button} ${
                toggleButton === 2 ? classes.button__three : null
              }`}
            >
              Без ограничений
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default List;
