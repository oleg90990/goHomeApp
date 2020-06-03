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

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <Layout>
      <Router>
        <Stack key="root" hideNavBar>
          <Scene back key={Scens.login} component={Login} />
          <Scene key={Scens.dashboard} component={Dashboard} title="Гланая" initial />
          <Scene key={Scens.accounnt} component={Account} title="Аккаунт" />
          <Scene key={Scens.items} component={Items} title="Объявления" />
          <Scene key={Scens.item} component={Item} title="Объявление" />
        </Stack>
      </Router>
    </Layout>
  );
};

export default App;
