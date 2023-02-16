import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.style';
import { GlobalStyle } from './styles/global.style';
import Header from './components/Layout/Header';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header />
    </ThemeProvider>
  );
};

export default App;
