import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistedStore, store} from './state/state';
import {Counter} from './ui/screens/counter-screen';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <Counter />
      </PersistGate>
    </Provider>
  );
};

export default App;
