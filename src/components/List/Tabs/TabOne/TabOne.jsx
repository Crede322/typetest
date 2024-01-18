import React, {useState, useEffect} from 'react';
import classes from "./TabOne.module.css";
import Keys from '../Keys';

const TabOne = () => {
    
let keyData1 = [
    {text: '`', ruText: 'ё', leftKey: 30, bgcolor:''},
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
let keyData2 = [
    {text:'Tab',keyPosition:12,width:80},
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
let keyData3 = [
    {text:'Caps', keyPosition:12,width:120},
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
]
let keyData4 = [
    {text:'Shift', keyPosition:12,width:150},
    {text: 'Z', ruText: 'я'},
    {text: 'X', ruText: 'ч'},
    {text: 'C', ruText: 'с'},
    {text: 'V', ruText: 'м'},
    {text: 'B', ruText: 'и'},
    {text: 'N', ruText: 'т'},
    {text: 'M', ruText: 'ь'},
    {text: '<', ruText: ',б', leftKey:33},
    {text: '>', ruText: '.ю', leftKey:28},
    {text: '/', ruText: '.'},
    {text:'Shift', keyPosition:12,width:210}
]
let keyData5 = [
    {text:'Ctrl',width:90,keyPosition:12},
    {},
    {text: 'Alt', width:60,keyPosition:12},
    {width:520},{text: 'Alt', width:60, keyPosition:12},
    {},
    {},
    {text:'Ctrl',width:90,keyPosition:12}
]

const [keyDataArray, setKeyDataArray] = useState ([
    ...keyData1,
    ...keyData2,
    ...keyData3,
    ...keyData4,
    ...keyData5
]);

const [pressedKey, setPressedKey] = useState(null);

useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
        document.removeEventListener('keydown', handleKeyDown);
    };
},);

const handleKeyDown = (event) => {
    const key = event.key;
    setPressedKey(key);
    
    setKeyDataArray((prevKeyDataArray) => {
        return prevKeyDataArray.map((keyData) => {
            if (keyData.text === key) {
                return { ...keyData, bgcolor: 'red'};
            }
            return keyData;
        })
    })
};

useEffect(() => {
    console.log(keyDataArray);
}, [keyDataArray]);

return (
    <div>
            <div className={classes.tabOne__wrapper}>
                <div className={classes.keyboard}>
                    <ul>
                        {keyData1.map((data, index) => (
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
                        {keyData2.map((data, index) => (
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
                        {keyData3.map((data, index) => (
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
                        {keyData4.map((data, index) => (
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
                        {keyData5.map((data, index) => (
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