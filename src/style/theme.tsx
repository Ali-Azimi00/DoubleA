import Breakpoints from '../utils/breakpoints';

export const theme = {
  fonts: { sizes: [12, 14, 16, 24, 32, 48, 64] },
  colors: {
    primary: '#02aab0',
    secondary: '#00cdac',
    white: '#ffffff',
  },
  breakpoints: {
    xSmall: `@media(max-width: ${Breakpoints.XSmall}px)`,
    small: `@media(min-width: ${Breakpoints.Small}px)`,
    medium: `@media(min-width: ${Breakpoints.Medium}px)`,
    large: `@media(min-width: ${Breakpoints.Large}px)`,
    xLarge: `@media(min-width: ${Breakpoints.XLarge}px)`,
    XXLarge: `@media(min-width: ${Breakpoints.XXLarge}px)`,
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
    },
  },
};
