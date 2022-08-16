import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <header className='App-header'>
          <p>hello nigga</p>
        </header>
      </div>
    </Provider>
  );
}

export default App;
