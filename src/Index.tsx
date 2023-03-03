import CreateDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '@/store';

const rootElement = document.getElementById('root') as HTMLElement;
const root = CreateDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
