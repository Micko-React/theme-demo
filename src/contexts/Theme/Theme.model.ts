import { Color } from '../../models/color.model';

export type ThemeType = 'darkDefault' | 'lightDefault';

export interface Theme {
  colors: {
    '--primary': Color;
    '--secondary': Color;
    '--background': Color;
    '--white': Color;
    '--primary-gradient': string;
  };
  spacing: {
    '--padding-1': string;
    '--padding-2': string;
    '--padding-3': string;
    '--padding-4': string;
    '--margin-1': string;
    '--margin-2': string;
    '--margin-3': string;
    '--margin-4': string;
  };
}
