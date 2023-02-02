import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { AppRoutes } from './routes/routes';

/*
ThemeProvider => aplica as cores em todos os componentes da aplicação
*/
export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
};
