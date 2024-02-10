import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface TabsContext {
  toggleButton: number,
  setToggleButton: Dispatch<SetStateAction<number>>,

  lastKey: string,
  setLastKey: Dispatch<SetStateAction<string>>,

  mainColor: string,
  setMainColor: Dispatch<SetStateAction<string>>,

  clipBoard: string,
  setClipBoard: Dispatch<SetStateAction<string>>,

  displayText: string[],
  setDisplayText: Dispatch<SetStateAction<string[]>>,

  toggleTimerState: boolean,
  setToggleTimerState: Dispatch<SetStateAction<boolean>>,

  seconds: number,
  setSeconds: Dispatch<SetStateAction<number>>,
}

const TabContext = createContext<any>(0);

const TabContextProvider = ({ children }: { children : ReactNode }) => {
    const [toggleButton, setToggleButton] = useState<number>(0);
    const [lastKey,setLastKey] = useState<string>('');
    const [mainColor, setMainColor] = useState<string>('rgba(53, 29, 163, 0.7)');
    const [clipBoard, setClipBoard] = useState<string>('');
    const [displayText, setDisplayText] = useState<string[]>([]);
    const [toggleTimerState, setToggleTimerState] = useState(false);
    const [seconds, setSeconds] = useState(120);

    const contextValue: TabsContext = {
        mainColor,
        setMainColor,
        toggleButton,
        setToggleButton,
        lastKey,
        setLastKey,
        clipBoard,
        setClipBoard,
        displayText,
        setDisplayText,
        toggleTimerState,
        setToggleTimerState,
        seconds,
        setSeconds
    };

    return (
        <TabContext.Provider value={contextValue}>
            {children}
        </TabContext.Provider>
    );
};

export { TabContext, TabContextProvider };