import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootComponent from './RootComponent';
import { persistor, store } from './store/reducers/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootComponent />
      </PersistGate>
    </Provider>
  );
}

export default App;
