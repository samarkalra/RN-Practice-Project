import React from 'react';
import {Provider} from 'react-redux';
import {store} from './state/state';
import {Counter} from './ui/screens/counter-screen';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
