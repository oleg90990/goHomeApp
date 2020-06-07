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
import { Router, Scene, Stack } from 'react-native-router-flux';
import { Scens } from './enum/Scens'

import Login from './scens/Login';
import Dashboard from './scens/Dashboard';
import Account from './scens/Account';
import Items from './scens/Items';
import Item from './scens/Item';

import Layout from "./components/layout/Index";

import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './store';


const App = () => {
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <Layout>
        <Router>
          <Stack key="root" hideNavBar={true}>
            <Scene back key={Scens.login} component={Login} title="Вход" />
            <Scene key={Scens.dashboard} component={Dashboard} title="Поиск" initial />
            <Scene key={Scens.accounnt} component={Account} title="Аккаунт" />
            <Scene key={Scens.items} component={Items} title="Объявления" />
            <Scene key={Scens.item} component={Item} title="Объявление" />
          </Stack>
        </Router>
      </Layout>
    </Provider>
  );
};

export default App;
