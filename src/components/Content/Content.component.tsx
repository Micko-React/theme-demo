import React from 'react';
import { Button } from '../Button/Button.component';
import { useTheme } from '../../contexts/Theme/Theme.context';

import './Content.style.css';

export const Content: React.FC = () => {
  const { theme, setCurrentTheme } = useTheme();

  return (
    <div className={'content'} style={{ ...theme } as React.CSSProperties}>
      <h1 className={'content__title'}>
        <span className={'content__title--colored'}>Andrej </span>
        working with themes
      </h1>
      <p className={'content__paragraph'}>
        This is an example how to make <b>themes</b>
      </p>
      <p className={'content__paragraph'}>
        Example with <b>Typescript</b>, <b>Context API</b> and{' '}
        <b>React Hooks</b>
      </p>
      <div className={'content__buttons'}>
        <Button
          type={'primary'}
          theme={theme}
          onClick={() => setCurrentTheme('lightDefault')}
        >
          Light theme
        </Button>
        <Button
          type={'secondary'}
          theme={theme}
          onClick={() => setCurrentTheme('darkDefault')}
        >
          Dark theme
        </Button>
      </div>
    </div>
  );
};
