import { ThemeProvider } from 'styled-components';
import theme from '@/styles/Global/theme.style';
import { GlobalStyle } from '@/styles/Global/global.style';
import Header from '@/components/Layout/Header';
import Main from '@/components/Layout/Main';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();
  const path = useLocation().pathname;

  const checkLogin = () => {
    localStorage.user === undefined && navigate('/');
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      {path === '/calendar' || path === '/statistics' || path === '/setting' ? (
        <Header />
      ) : null}

      <Main />
    </ThemeProvider>
  );
}

export default App;
