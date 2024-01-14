import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface TabsContext {
  toggleButton: number,
  setToggleButton: Dispatch<SetStateAction<number>>,
}

const TabContext = createContext<any>(0);

const TabContextProvider = ({ children }: { children : ReactNode }) => {
    const [toggleButton, setToggleButton] = useState<number>(0);

    const contextValue: TabsContext = {
        toggleButton,
        setToggleButton,
    };

    return (
        <TabContext.Provider value={contextValue}>
            {children}
        </TabContext.Provider>
    );
};

export { TabContext, TabContextProvider };