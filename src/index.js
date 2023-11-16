import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';

const theme = {
  color: '#485968',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={{ theme }}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <Provider store={store}>
          <App />
        </Provider>
        <GlobalStyle />{' '}
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
