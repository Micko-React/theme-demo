import { Color } from '../../models/color.model';
import { ThemeType, Theme } from './Theme.model';

export const THEMES: Record<ThemeType, Theme> = {
  lightDefault: {
    colors: {
      '--primary': Color.VIOLET,
      '--secondary': Color.DARK_VIOLET,
      '--background': Color.LIGHT_GRAY,
      '--white': Color.WHITE,
      '--primary-gradient': 'linear-gradient(90deg, #09cd9e 0%, #80d949 100%)',
    },
    spacing: {
      '--padding-1': '4px',
      '--padding-2': '8px',
      '--padding-3': '12px',
      '--padding-4': '16px',
      '--margin-1': '10px',
      '--margin-2': '20px',
      '--margin-3': '30px',
      '--margin-4': '40px',
    },
  },
  darkDefault: {
    colors: {
      '--primary': Color.VIOLET,
      '--secondary': Color.WHITE,
      '--background': Color.DARK_VIOLET,
      '--white': Color.WHITE,
      '--primary-gradient': 'linear-gradient(90deg, #09cd9e 0%, #80d949 100%)',
    },
    spacing: {
      '--padding-1': '4px',
      '--padding-2': '8px',
      '--padding-3': '12px',
      '--padding-4': '16px',
      '--margin-1': '10px',
      '--margin-2': '20px',
      '--margin-3': '30px',
      '--margin-4': '40px',
    },
  },
};
