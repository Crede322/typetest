import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface TabsContext {
  toggleButton: number,
  setToggleButton: Dispatch<SetStateAction<number>>,

  lastKey: string,
  setLastKey: Dispatch<SetStateAction<string>>,
}

const TabContext = createContext<any>(0);

const TabContextProvider = ({ children }: { children : ReactNode }) => {
    const [toggleButton, setToggleButton] = useState<number>(0);
    const [lastKey,setLastKey] = useState<string>('');
    
    const contextValue: TabsContext = {
        toggleButton,
        setToggleButton,
        lastKey,
        setLastKey,
    };

    return (
        <TabContext.Provider value={contextValue}>
            {children}
        </TabContext.Provider>
    );
};

export { TabContext, TabContextProvider };