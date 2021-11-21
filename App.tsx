import { ThemeProvider } from '@emotion/react';
import { StatusBar } from 'expo-status-bar';
import { theme } from './src/styles/global';
import { Home } from './src/views/home';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
