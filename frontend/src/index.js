import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { StoreProvider } from './store';
import { Provider } from 'react-redux'
import {store, persistor} from './reduxStore'
import { PersistGate } from 'redux-persist/lib/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
   <StoreProvider>
     <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
       <App />
       </PersistGate>
     </Provider>
   </StoreProvider>
  </Router>
);