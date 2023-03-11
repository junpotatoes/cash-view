import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '@/store';
import App from '@/App';
import MetaTag from '@/components/Seo/MetaTag';

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <Provider store={store}>
    <MetaTag></MetaTag>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  rootElement
);
