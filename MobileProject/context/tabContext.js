import React from "react";

const TabContext = React.createContext({ opened: false, setOpened: () => {} });

export const tabContextProvider = () => {
  const [opened, setOpened] = React.useState(false);

  const toggleOpened = () =>{
    setOpened(!opened)
  }

  return(
    <TabContext.Provider value={{opened, toggleOpened}}>
        {children}
    </TabContext.Provider>
  );
};

export const useTabMenu = () => React.useContext(TabContext);