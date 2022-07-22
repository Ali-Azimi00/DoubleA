import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../style/theme';
import GlobalStyles from '../../style/GlobalStyles';

interface ProviderProps {
  children: React.ReactNode;
}

export const UiProvider = ({ children }: ProviderProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);
