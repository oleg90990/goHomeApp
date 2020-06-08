/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

//https://medium.com/@killerchip0/react-native-redux-typescript-guide-f251db03428f

import React from 'react';
import Router from './router';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './store';


const App = () => {
  console.log('App')
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
    </Provider>
  );
};

export default App;
