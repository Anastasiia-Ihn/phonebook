import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

const theme = {
  color: '#485968',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={{ theme }}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/phonebook">
            <App />
            <GlobalStyle />{' '}
          </BrowserRouter>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
