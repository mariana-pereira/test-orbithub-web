import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import history from './services/history';
import { store, persistor } from './store';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <Routes />
        <ToastContainer autoClose={3000} />
        <GlobalStyle />
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
