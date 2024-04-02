import React, { Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { THEMES } from './Theme.config';
import { ThemeType, Theme } from './Theme.model';

interface ThemeContextProps {
  themeType: ThemeType;
  theme: Theme;
  setCurrentTheme: Dispatch<SetStateAction<ThemeType>>;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  themeType: 'lightDefault',
  theme: THEMES['lightDefault'],
} as ThemeContextProps);

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [currentTheme, setCurrentTheme] =
    React.useState<ThemeType>('lightDefault');

  return (
    <ThemeContext.Provider
      value={{
        themeType: currentTheme,
        theme: THEMES[currentTheme],
        setCurrentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
