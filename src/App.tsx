import React from 'react';
import { useTheme } from './contexts/Theme/Theme.context';
import { Content } from './components/Content/Content.component';
import bg from './assets/bg_shapes.svg';
import './App.css';

export const App = () => {
  const { theme } = useTheme();
  console.log({ ...theme }, 'theme');
  const { colors, spacing } = theme;
  console.log({ ...colors, ...spacing }, 'colors');

  return (
    <div
      className={'app'}
      style={{ ...colors, ...spacing } as React.CSSProperties}
    >
      <div className={'app__main'}>
        <Content />
      </div>
      <div className={'app__bg'}>
        <img src={bg} alt={'bg'} />
      </div>
    </div>
  );
};

export default App;
