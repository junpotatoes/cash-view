import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.style';
import { GlobalStyle } from './styles/global.style';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <div>hello world</div>
    </ThemeProvider>
  );
};

export default App;
