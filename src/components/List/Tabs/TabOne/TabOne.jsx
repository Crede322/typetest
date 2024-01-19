import React, {useState, useEffect} from 'react';
import classes from "./TabOne.module.css";
import Keys from '../Keys';

const TabOne = () => {
    
const keyData1 = [
    {text: '`', ruText: 'ё', leftKey: 30},
    {text: '1', keyPosition:12},
    {text: '2', keyPosition:12},
    {text: '3', keyPosition:12},
    {text: '4', keyPosition:12},
    {text: '5', keyPosition:12},
    {text: '6', keyPosition:12},
    {text: '7', keyPosition:12},
    {text: '8', keyPosition:12},
    {text: '9', keyPosition:12},
    {text: '0', keyPosition:12},
    {text: '-', keyPosition:10},
    {text: '=', keyPosition:10}
]
const keyData2 = [
    {text:'Tab',keyPosition:12,width:80, id:'tab'},
    {text: 'Q', ruText: 'й'},
    {text: 'W', ruText: 'ц'},
    {text: 'E', ruText: 'у'},
    {text: 'R', ruText: 'к'},
    {text: 'T', ruText: 'е'},
    {text: 'Y', ruText: 'н'},
    {text: 'U', ruText: 'г'},
    {text: 'I', ruText: 'ш', leftKey:32},
    {text: 'O', ruText: 'щ', leftKey:32},
    {text: 'P', ruText: 'з'},
    {text: '[', ruText: 'х'},
    {text: ']', ruText: 'ъ'},
]
const keyData3 = [
    {text:'Caps', keyPosition:12,width:120, id:'caps'},
    {text: 'A', ruText: 'ф'},
    {text: 'S', ruText: 'ы'},
    {text: 'D', ruText: 'в'},
    {text: 'F', ruText: 'а'},
    {text: 'G', ruText: 'п'},
    {text: 'H', ruText: 'р'},
    {text: 'J', ruText: 'о'},
    {text: 'K', ruText: 'л'},
    {text: 'L', ruText: 'д'},
    {text: ';', ruText: ': ж'},
    {text: '"', ruText: 'э'},
    {text: 'I', ruText: '\\'}
];
const keyData4 = [
    {text:'Shift', keyPosition:12,width:150, id:'leftshift'},
    {text: 'Z', ruText: 'я'},
    {text: 'X', ruText: 'ч'},
    {text: 'C', ruText: 'с'},
    {text: 'V', ruText: 'м'},
    {text: 'B', ruText: 'и'},
    {text: 'N', ruText: 'т'},
    {text: 'M', ruText: 'ь'},
    {text: '<', ruText: ',б', leftKey:33, id:'leftarrow'},
    {text: '>', ruText: 'ю', leftKey:28, id:'rightarrow'},
    {text: '/', ruText: '?', id:'key191'},
    {text:'Shift', keyPosition:12,width:210, id:'rightshift'}
];
const keyData5 = [
    {text:'Ctrl',width:90,keyPosition:12, id:'leftControl'},
    {id:'meta'},
    {text: 'Alt', width:60,keyPosition:12, id:'leftalt'},
    {width:520, id: 'space'},
    {text: 'Alt', width:60, keyPosition:12, id:'rightalt'},
    {},
    {id:'contextmenu'},
    {text:'Ctrl',width:90,keyPosition:12, id:'rightControl'}
];

const [keyDataArray, setKeyDataArray] = useState ([
...keyData1,
...keyData2,
...keyData3,
...keyData4,
...keyData5,
]);

const [pressedKey, setPressedKey] = useState(null);

useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
        document.removeEventListener('keydown', handleKeyDown);
    };
},);

  const handleKeyDown = (event) => {
      const keyCode = event.keyCode
      const key = event.key.toUpperCase();
      const ruKey = event.key.toLowerCase();
      setPressedKey(key);
    const location = event.location;
    const updatedKeyDataArray = keyDataArray.map((item) => {
        if (item.text === key || item.ruText === ruKey) {
            return {...item, bgcolor: 'red'};
        } else if (key === 'TAB' && item.id === 'tab') {
      return { ...item, bgcolor: 'red' };
        } else if (key === 'CAPSLOCK' && item.id === 'caps') {
      return { ...item, bgcolor: 'red' };
        } else if (key === 'SHIFT' && location === 1 && item.id === 'leftshift') {
      return { ...item, bgcolor: 'red' };
        } else if (key === 'SHIFT' && location === 2 && item.id === 'rightshift') {
      return { ...item, bgcolor: 'red' };
        } else if (key === 'CONTROL' && location === 1 && item.id === 'leftControl') {
      return { ...item, bgcolor: 'red' };
        } else if (key === 'CONTROL' && location === 2 && item.id === 'rightControl') {
      return { ...item, bgcolor: 'red' };
        } else if (key === 'ALT' && location === 1 && item.id === 'leftalt') {
      return { ...item, bgcolor: 'red' };
        } else if (key === 'ALT' && location === 2 && item.id === 'rightalt') {
      return { ...item, bgcolor: 'red' };
        } else if (key === 'META' && item.id === 'meta') {
      return { ...item, bgcolor: 'red' };
        } else if (key === ' ' && item.id === 'space') {
      return { ...item, bgcolor: 'red' };
        } else if (key === 'CONTEXTMENU' && item.id === 'contextmenu') {
      return { ...item, bgcolor: 'red' };
        } else if ((key === ',' || key === 'Б') && item.id === 'leftarrow' ) {
      return { ...item, bgcolor: 'red'};
        } else if (keyCode === 190 && item.id === 'rightarrow' ) {
      return { ...item, bgcolor: 'red'};
        } else if (keyCode === 191 && item.id === 'key191' ) {
      return { ...item, bgcolor: 'red'};
        }
        return item;
    });
    console.log(key)
    setKeyDataArray(updatedKeyDataArray);
  };

return (
    <div>
            <div className={classes.tabOne__wrapper}>
                <div className={classes.keyboard}>
                    <ul>
                        {keyDataArray.slice(0, 13).map((data, index) => (
                        <Keys
                            bgcolor={data.bgcolor}
                            key={index}
                            text={data.text}
                            ruText={data.ruText}
                            leftKey={data.leftKey}
                            keyPosition={data.keyPosition}
                        />))}<Keys text={'←'} width={160} className={classes.tester}/>
                    </ul>

                    <ul className={classes.keyRow}>
                        {keyDataArray.slice(13, 26).map((data, index) => (
                        <Keys
                            bgcolor={data.bgcolor}
                            key={index}
                            text={data.text}
                            ruText={data.ruText}
                            leftKey={data.leftKey}
                            keyPosition={data.keyPosition}
                            width={data.width}
                        />))}
                        <div className={classes.figure}/><div className={classes.figure2}/>
                    </ul>

                    <ul className={classes.keyRow}>
                        {keyDataArray.slice(26, 39).map((data, index) => (
                        <Keys
                            bgcolor={data.bgcolor}
                            key={index}
                            text={data.text}
                            ruText={data.ruText}
                            leftKey={data.leftKey}
                            keyPosition={data.keyPosition}
                            width={data.width}
                        />))}
                    </ul>

                    <ul className={classes.keyRow}>
                        {keyDataArray.slice(39, 51).map((data, index) => (
                        <Keys
                            bgcolor={data.bgcolor}
                            key={index}
                            text={data.text}
                            ruText={data.ruText}
                            leftKey={data.leftKey}
                            keyPosition={data.keyPosition}
                            width={data.width}
                        />))}
                    </ul>

                    <ul className={classes.keyRow}>
                        {keyDataArray.slice(51, 59).map((data, index) => (
                        <Keys
                            bgcolor={data.bgcolor}
                            key={index}
                            text={data.text}
                            ruText={data.ruText}
                            leftKey={data.leftKey}
                            keyPosition={data.keyPosition}
                            width={data.width}
                        />))}
                    </ul>
                </div>
            </div>
            <h2>{pressedKey}</h2>
        </div>
    );
};

export default TabOne;