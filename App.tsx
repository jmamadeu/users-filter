import { ThemeProvider } from '@emotion/react';
import { StatusBar } from 'expo-status-bar';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './src/services/api';
import { theme } from './src/styles/global';
import { Home } from './src/views/home';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Home />
        </QueryClientProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
