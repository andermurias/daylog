import React, {useState} from 'react';
import moment from 'moment';
import {saveTheme, THEME_LIGHT} from '../Common/Helper';

export const AppContext = React.createContext({});

export const AppProvider = ({children}) => {
  const [currentDate, setCurrentDate] = useState(moment().format('YYYY-MM-DD'));
  const [loading, setLoading] = useState(true);
  const [editTask, setEditTask] = useState(null);
  const [optionTask, setOptionTask] = useState(null);
  const [token, setToken] = useState(null);
  const [openDrawer, setOpenDrawerState] = useState(false);
  const [theme, setTheme] = useState(THEME_LIGHT);
  const setOpenDrawer = () => setOpenDrawerState(true);
  const setCloseDrawer = () => setOpenDrawerState(false);

  const updateTheme = (theme) => {
    saveTheme(theme);
    setTheme(theme);
  };

  return (
    <AppContext.Provider
      value={{
        currentDate,
        setCurrentDate,
        loading,
        setLoading,
        editTask,
        setEditTask,
        token,
        setToken,
        optionTask,
        setOptionTask,
        openDrawer,
        setOpenDrawerState,
        setOpenDrawer,
        setCloseDrawer,
        theme,
        updateTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
