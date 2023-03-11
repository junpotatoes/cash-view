import CreateDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '@/store';
import App from '@/App';
import MetaTag from '@/components/Seo/MetaTag';

const rootElement = document.getElementById('root') as HTMLElement;

const root = CreateDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <MetaTag />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
