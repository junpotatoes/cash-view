import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.style';
import { GlobalStyle } from './styles/global.style';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import { useLocation } from 'react-router-dom';

function App() {
  const path = useLocation().pathname;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      {path === '/' ? null : <Header />}

      <Main />
    </ThemeProvider>
  );
}

export default App;
