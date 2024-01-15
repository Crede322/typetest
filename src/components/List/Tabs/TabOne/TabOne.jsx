import React from 'react';
import classes from "./TabOne.module.css";
import Keys from '../Keys';

const TabOne = () => {
    return (
        <div>
            <div className={classes.tabOne__wrapper}>
                <div className={classes.keyboard}>
                    <ul><Keys text={'`'} ruText={'ё'} leftKey={30}/><Keys text={'1'} ruText={''}/><Keys text={'2'} ruText={''}/><Keys text={'3'} ruText={''}/><Keys text={'4'} ruText={''}/><Keys text={'5'} ruText={''}/><Keys text={'6'} ruText={''}/><Keys text={'7'} ruText={'й'}/><Keys text={'8'} ruText={''}/><Keys text={'9'} ruText={''}/><Keys text={'0'} ruText={''}/><Keys text={'-'} ruText={''}/><Keys text={'='} ruText={''}/><Keys text={'←'} width={160}/></ul>
                    <ul className={classes.keyRow}><Keys text={'Tab'} width={100}/><Keys text={'Q'} ruText={'й'}/><Keys text={'W'} ruText={'ц'}/><Keys text={'E'} ruText={'у'}/><Keys text={'R'} ruText={'к'}/><Keys text={'T'} ruText={'е'}/><Keys text={'Y'} ruText={'н'}/><Keys text={'U'} ruText={'г'}/><Keys text={'I'} ruText={'ш'} leftKey={32}/><Keys text={'O'} ruText={'щ'} leftKey={32}/><Keys text={'P'} ruText={'з'}/><Keys text={'['} ruText={'х'}/><Keys text={']'} ruText={'ъ'}/></ul>
                    <ul className={classes.keyRow}><Keys text={'Caps'} width={120}/><Keys text={'A'} ruText={'ф'}/><Keys text={'S'} ruText={'ы'}/><Keys text={'D'} ruText={'в'}/><Keys text={'F'} ruText={'а'}/><Keys text={'G'} ruText={'п'}/><Keys text={'H'} ruText={'р'}/><Keys text={'J'} ruText={'о'}/><Keys text={'K'} ruText={'л'}/><Keys text={'L'} ruText={'д'}/><Keys text={';'} ruText={'ж'}/><Keys text={'"'} ruText={'э'}/><Keys text={'Ӏ'} ruText={'/'}/><Keys text={'↵'} width={100}/></ul>
                    <ul className={classes.keyRow}><Keys text={'Shift'} width={180}/><Keys text={'Z'} ruText={'я'}/><Keys text={'X'} ruText={'ч'}/><Keys text={'C'} ruText={'с'}/><Keys text={'V'} ruText={'м'}/><Keys text={'B'} ruText={'и'}/><Keys text={'N'} ruText={'т'}/><Keys text={'M'} ruText={'ь'}/><Keys text={','} ruText={'б'}/><Keys text={'.'} ruText={'ю'}/><Keys text={'/'} ruText={'.'}/><Keys text={'Shift'} width={180}/></ul>
                    <ul></ul>
                </div>
            </div>
        </div>
    );
};

export default TabOne;