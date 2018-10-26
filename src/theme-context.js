import React from 'react';

export const themes = {
    light: {
      foreground: '#efefef',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#aaa',
    },
  };
  
// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {
        console.log("Current theme ", this.theme);
    },
});