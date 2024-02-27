import React, { useState, useEffect, useContext } from "react";
import classes from "./Tab.module.css";
import Keys from "./Keys.jsx";
import { TabContext } from "./../../../context/TabContext.tsx";
import Enter from "./Enter.svg";
import EnterViolet from "./EnterViolet.svg";
import EnterBlue from "./EnterBlue.svg";
import EnterRed from "./EnterRed.svg";
import EnterGreen from "./EnterGreen.svg";

const Tab = () => {
  const initialState = {};
  const [state, setState] = useState(initialState);
  const { setLastKey, mainColor, displayText, setDisplayText } =
    useContext(TabContext);

  const keysIdArray = [
    192,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    48,
    189,
    187,
    8,
    9,
    81,
    87,
    69,
    82,
    84,
    89,
    85,
    73,
    79,
    80,
    219,
    221,
    20,
    65,
    83,
    68,
    70,
    71,
    72,
    74,
    75,
    76,
    186,
    222,
    220,
    13,
    "leftshift",
    90,
    88,
    67,
    86,
    66,
    78,
    77,
    188,
    190,
    191,
    "rightshift",
    "leftcontrol",
    91,
    "leftalt",
    32,
    "rightalt",
    46,
    93,
    "rightcontrol",
  ];

  const stateObjects = keysIdArray.reduce((acc, key) => {
    const stateName = `colorState${key}`;
    const stateSetterName = `setColorState${key}`;
    acc[stateName] = state[stateName] || "#fff";
    acc[stateSetterName] = (newState) => {
      setState((prevState) => ({ ...prevState, [stateName]: newState }));
    };
    return acc;
  }, {});

  const keyData1 = [
    {
      text: "`",
      ruText: "ё",
      leftKey: 30,
      id: 192,
      bgcolor: stateObjects.colorState192,
    },
    { text: "1", keyPosition: 16, id: 49, bgcolor: stateObjects.colorState49 },
    { text: "2", keyPosition: 16, id: 50, bgcolor: stateObjects.colorState50 },
    { text: "3", keyPosition: 16, id: 51, bgcolor: stateObjects.colorState51 },
    { text: "4", keyPosition: 16, id: 52, bgcolor: stateObjects.colorState52 },
    { text: "5", keyPosition: 16, id: 53, bgcolor: stateObjects.colorState53 },
    { text: "6", keyPosition: 16, id: 54, bgcolor: stateObjects.colorState54 },
    { text: "7", keyPosition: 16, id: 55, bgcolor: stateObjects.colorState55 },
    { text: "8", keyPosition: 16, id: 56, bgcolor: stateObjects.colorState56 },
    { text: "9", keyPosition: 16, id: 57, bgcolor: stateObjects.colorState57 },
    { text: "0", keyPosition: 16, id: 48, bgcolor: stateObjects.colorState48 },
    {
      text: "-",
      keyPosition: 16,
      id: 189,
      bgcolor: stateObjects.colorState189,
    },
    {
      text: "=",
      keyPosition: 16,
      id: 187,
      bgcolor: stateObjects.colorState187,
    },
    {
      text: "←",
      keyPosition: 16,
      width: 160,
      id: 8,
      bgcolor: stateObjects.colorState8,
    },
  ];
  const keyData2 = [
    {
      text: "Tab",
      keyPosition: 16,
      width: 80,
      id: 9,
      bgcolor: stateObjects.colorState9,
    },
    { text: "Q", ruText: "й", id: 81, bgcolor: stateObjects.colorState81 },
    { text: "W", ruText: "ц", id: 87, bgcolor: stateObjects.colorState87 },
    { text: "E", ruText: "у", id: 69, bgcolor: stateObjects.colorState69 },
    { text: "R", ruText: "к", id: 82, bgcolor: stateObjects.colorState82 },
    { text: "T", ruText: "е", id: 84, bgcolor: stateObjects.colorState84 },
    { text: "Y", ruText: "н", id: 89, bgcolor: stateObjects.colorState89 },
    { text: "U", ruText: "г", id: 85, bgcolor: stateObjects.colorState85 },
    {
      text: "I",
      ruText: "ш",
      leftKey: 32,
      id: 73,
      bgcolor: stateObjects.colorState73,
    },
    {
      text: "O",
      ruText: "щ",
      leftKey: 32,
      id: 79,
      bgcolor: stateObjects.colorState79,
    },
    { text: "P", ruText: "з", id: 80, bgcolor: stateObjects.colorState80 },
    { text: "[", ruText: "х", id: 219, bgcolor: stateObjects.colorState219 },
    { text: "]", ruText: "ъ", id: 221, bgcolor: stateObjects.colorState221 },
  ];
  const keyData3 = [
    {
      text: "Caps",
      keyPosition: 16,
      width: 120,
      id: 20,
      bgcolor: stateObjects.colorState20,
    },
    { text: "A", ruText: "ф", id: 65, bgcolor: stateObjects.colorState65 },
    { text: "S", ruText: "ы", id: 83, bgcolor: stateObjects.colorState83 },
    { text: "D", ruText: "в", id: 68, bgcolor: stateObjects.colorState68 },
    { text: "F", ruText: "а", id: 70, bgcolor: stateObjects.colorState70 },
    { text: "G", ruText: "п", id: 71, bgcolor: stateObjects.colorState71 },
    { text: "H", ruText: "р", id: 72, bgcolor: stateObjects.colorState72 },
    { text: "J", ruText: "о", id: 74, bgcolor: stateObjects.colorState74 },
    { text: "K", ruText: "л", id: 75, bgcolor: stateObjects.colorState75 },
    { text: "L", ruText: "д", id: 76, bgcolor: stateObjects.colorState76 },
    { text: ";", ruText: ": ж", id: 186, bgcolor: stateObjects.colorState186 },
    { text: '"', ruText: "э", id: 222, bgcolor: stateObjects.colorState222 },
    { text: "I", ruText: "\\", id: 220, bgcolor: stateObjects.colorState220 },
  ];
  const keyData4 = [
    {
      text: "Shift",
      keyPosition: 16,
      width: 150,
      id: "leftshift",
      bgcolor: stateObjects.colorStateleftshift,
    },
    { text: "Z", ruText: "я", id: 90, bgcolor: stateObjects.colorState90 },
    { text: "X", ruText: "ч", id: 88, bgcolor: stateObjects.colorState88 },
    { text: "C", ruText: "с", id: 67, bgcolor: stateObjects.colorState67 },
    { text: "V", ruText: "м", id: 86, bgcolor: stateObjects.colorState86 },
    { text: "B", ruText: "и", id: 66, bgcolor: stateObjects.colorState66 },
    { text: "N", ruText: "т", id: 78, bgcolor: stateObjects.colorState78 },
    { text: "M", ruText: "ь", id: 77, bgcolor: stateObjects.colorState77 },
    {
      text: "<",
      ruText: ",б",
      leftKey: 33,
      id: 188,
      bgcolor: stateObjects.colorState188,
    },
    {
      text: ">",
      ruText: "ю",
      leftKey: 28,
      id: 190,
      bgcolor: stateObjects.colorState190,
    },
    { text: "/", ruText: "?", id: 191, bgcolor: stateObjects.colorState191 },
    {
      text: "Shift",
      keyPosition: 16,
      width: 210,
      id: "rightshift",
      bgcolor: stateObjects.colorStaterightshift,
    },
  ];
  const keyData5 = [
    {
      text: "Ctrl",
      width: 90,
      keyPosition: 16,
      id: "leftcontrol",
      bgcolor: stateObjects.colorStateleftcontrol,
    },
    { id: 91, bgcolor: stateObjects.colorState91 },
    {
      text: "Alt",
      width: 60,
      keyPosition: 16,
      id: "leftalt",
      bgcolor: stateObjects.colorStateleftalt,
    },
    { width: 520, id: 32, bgcolor: stateObjects.colorState32 },
    {
      text: "Alt",
      width: 60,
      keyPosition: 16,
      id: "rightalt",
      bgcolor: stateObjects.colorStaterightalt,
    },
    { id: 46, bgcolor: stateObjects.colorState46 },
    { id: 93, bgcolor: stateObjects.colorState93 },
    {
      text: "Ctrl",
      width: 90,
      keyPosition: 16,
      id: "rightcontrol",
      bgcolor: stateObjects.colorStaterightcontrol,
    },
  ];

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (event) => {
    const keyCode = event.keyCode;
    const key = event.key;
    const location = event.location;

    if (key === displayText[0]) {
      setDisplayText(displayText.substring(1));
    }

    const stateSetterName = `setColorState${keyCode}`;
    const setColorState = stateObjects[stateSetterName];

    if (setColorState) {
      setColorState(mainColor);
      setTimeout(() => {
        setColorState("#fff");
      }, 500);
    }

    function colorSwitch(color) {
      switch (keyCode) {
        case 16:
          if (location === 1) {
            stateObjects.setColorStateleftshift(color);
          } else if (location === 2) {
            stateObjects.setColorStaterightshift(color);
          }
          break;

        case 17:
          if (location === 1) {
            stateObjects.setColorStateleftcontrol(color);
          } else if (location === 2) {
            stateObjects.setColorStaterightcontrol(color);
          }
          break;

        case 18:
          if (location === 1) {
            stateObjects.setColorStateleftalt(color);
          } else if (location === 2) {
            stateObjects.setColorStaterightalt(color);
          }
          break;

        case 13:
          stateObjects.setColorState13(color);
          break;

        default:
      }
    }

    colorSwitch(mainColor);
    setTimeout(() => {
      colorSwitch("#fff");
    }, 500);

    setLastKey(key);
  };

  const enterSrc =
    stateObjects.colorState13 === "rgba(53, 29, 163, 0.7)"
      ? EnterViolet
      : stateObjects.colorState13 === "rgba(0, 39, 211, 0.7)"
        ? EnterBlue
        : stateObjects.colorState13 === "rgba(255, 0, 0, 0.9)"
          ? EnterRed
          : Enter;

  return (
    <div>
      <div className={classes.tabOne__wrapper}>
        <div className={classes.keyboard}>
          <ul>
            {keyData1.map((data, index) => (
              <Keys
                width={data.width}
                bgcolor={data.bgcolor}
                key={index}
                text={data.text}
                ruText={data.ruText}
                leftKey={data.leftKey}
                keyPosition={data.keyPosition}
              />
            ))}
          </ul>

          <ul className={classes.keyRow}>
            {keyData2.map((data, index) => (
              <Keys
                bgcolor={data.bgcolor}
                key={index}
                text={data.text}
                ruText={data.ruText}
                leftKey={data.leftKey}
                keyPosition={data.keyPosition}
                width={data.width}
              />
            ))}
            <div>
              <img src={enterSrc} alt="Enter" className={classes.enter} />
            </div>
          </ul>

          <ul className={classes.keyRow}>
            {keyData3.map((data, index) => (
              <Keys
                bgcolor={data.bgcolor}
                key={index}
                text={data.text}
                ruText={data.ruText}
                leftKey={data.leftKey}
                keyPosition={data.keyPosition}
                width={data.width}
              />
            ))}
          </ul>

          <ul className={classes.keyRow}>
            {keyData4.map((data, index) => (
              <Keys
                bgcolor={data.bgcolor}
                key={index}
                text={data.text}
                ruText={data.ruText}
                leftKey={data.leftKey}
                keyPosition={data.keyPosition}
                width={data.width}
              />
            ))}
          </ul>

          <ul className={classes.keyRow}>
            {keyData5.map((data, index) => (
              <Keys
                bgcolor={data.bgcolor}
                key={index}
                text={data.text}
                ruText={data.ruText}
                leftKey={data.leftKey}
                keyPosition={data.keyPosition}
                width={data.width}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tab;
