/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Router from './router';

import { StyleProvider } from 'native-base';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './store';

import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';


const App = () => {
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <StyleProvider style={getTheme(commonColor)}>
          <Router />
        </StyleProvider>
    </Provider>
  );
};

export default App;
