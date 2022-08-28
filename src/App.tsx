import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store/store';
import Layout from './Layout/Layout';
import './App.css';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
