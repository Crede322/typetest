import React from 'react';
import classes from "./TabOne.module.css";
import Keys from '../Keys';

const TabOne = () => {

const keyData1 = [
{text: '`', ruText: 'ё', leftKey: 30},{text: '1', keyPosition:12},{text: '2', keyPosition:12},{text: '3', keyPosition:12},{text: '4', keyPosition:12},{text: '5', keyPosition:12},{text: '6', keyPosition:12},{text: '7', keyPosition:12},{text: '8', keyPosition:12},{text: '9', keyPosition:12},{text: '0', keyPosition:12},{text: '-', keyPosition:10},{text: '=', keyPosition:10},{text:'←', width:'160'}
]
const handleClick = () => {

}

    return (
        <div>
            <div className={classes.tabOne__wrapper}>
                <div className={classes.keyboard}>
                    <ul><Keys text={'`'} ruText={'ё'} leftKey={30}/><Keys text={'1'} keyPosition={12}/><Keys text={'2'} keyPosition={12}/><Keys text={'3'} keyPosition={12}/><Keys text={'4'} keyPosition={12}/><Keys text={'5'} keyPosition={12}/><Keys text={'6'} keyPosition={12}/><Keys text={'7'} keyPosition={12}/><Keys text={'8'} keyPosition={12}/><Keys text={'9'} keyPosition={12}/><Keys text={'0'} keyPosition={12}/><Keys text={'-'} keyPosition={10}/><Keys text={'='} keyPosition={10}/><Keys text={'←'} width={160} className={classes.tester}/></ul>
                    <ul className={classes.keyRow}><Keys text={'Tab'} width={80} keyPosition={12}/><Keys text={'Q'} ruText={'й'}/><Keys text={'W'} ruText={'ц'}/><Keys text={'E'} ruText={'у'}/><Keys text={'R'} ruText={'к'}/><Keys text={'T'} ruText={'е'}/><Keys text={'Y'} ruText={'н'}/><Keys text={'U'} ruText={'г'}/><Keys text={'I'} ruText={'ш'} leftKey={32}/><Keys text={'O'} ruText={'щ'} leftKey={32}/><Keys text={'P'} ruText={'з'}/><Keys text={'['} ruText={'х'}/><Keys text={']'} ruText={'ъ'}/><div className={classes.figure}/><div className={classes.figure2}/></ul>
                    <ul className={classes.keyRow}><Keys text={'Caps'} width={120} keyPosition={12}/><Keys text={'A'} ruText={'ф'}/><Keys text={'S'} ruText={'ы'}/><Keys text={'D'} ruText={'в'}/><Keys text={'F'} ruText={'а'}/><Keys text={'G'} ruText={'п'}/><Keys text={'H'} ruText={'р'}/><Keys text={'J'} ruText={'о'}/><Keys text={'K'} ruText={'л'}/><Keys text={'L'} ruText={'д'}/><Keys text={';'} ruText={'ж'}/><Keys text={'"'} ruText={'э'}/><Keys text={'Ӏ'} ruText={'/'}/></ul>
                    <ul className={classes.keyRow}><Keys text={'Shift'} width={150} keyPosition={12}/><Keys text={'Z'} ruText={'я'}/><Keys text={'X'} ruText={'ч'}/><Keys text={'C'} ruText={'с'}/><Keys text={'V'} ruText={'м'}/><Keys text={'B'} ruText={'и'}/><Keys text={'N'} ruText={'т'}/><Keys text={'M'} ruText={'ь'}/><Keys text={','} ruText={'б'}/><Keys text={'.'} ruText={'ю'}/><Keys text={'/'} ruText={'.'}/><Keys text={'Shift'} width={210}/></ul>
                    <ul className={classes.keyRow}><Keys text={'Ctrl'} width={90} keyPosition={12}/><Keys width={60}/><Keys text={'Alt'} width={60} keyPosition={12}/><Keys width={520}/><Keys text={'Alt'} width={60} keyPosition={12}/><Keys width={60}/><Keys width={60}/><Keys text={'Ctrl'} width={90} keyPosition={12}/></ul>
                    <ul className={classes.keyRow}>{keyData1.map((data, index) => (
                            <Keys
                                key={index}
                                text={data.text}
                                ruText={data.ruText}
                                leftKey={data.leftKey}
                                keyPosition={data.keyPosition}
                                onClick={handleClick}
                            />))}</ul>
                </div>
            </div>
        </div>
    );
};

export default TabOne;