import { StatusBar } from 'expo-status-bar';
import Routes from './routes/Routes';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

export default function App() {
  return (
    <>
      <Provider store={store} >
        <StatusBar backgroundColor='#5a83a3' />
        <NativeBaseProvider>
          <Routes />
        </NativeBaseProvider>
      </Provider>
    </>
  );
}
