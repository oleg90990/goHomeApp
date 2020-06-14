import React, { useEffect } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Scens } from '../enum/Scens'

import Login from '../scens/Login';
import Dashboard from '../scens/Dashboard';
import Account from '../scens/Account';
import Items from '../scens/Items';
import Item from '../scens/Item';
import Loading from '../scens/Loading';
import Profile from '../scens/Profile';
import MyAds from '../scens/MyAds';
import CeratePost from '../scens/CreatePost';
import Register from '../scens/Register';

import Layout from "../components/layout/Index";

import { connect } from 'react-redux';
import { IState } from '../store/types';
import { loadDictionaries  } from '../store/dictionaries/actions';
import { loadUserFromStorage  } from '../store/user/actions';
import { IStateDictionariesReducer } from '../store/dictionaries';

interface IRouterProps extends IStateDictionariesReducer {
    loadDictionaries(): any,
    loadUserFromStorage(): any
}

const RouterApp: React.FC<IRouterProps> = (props) => {
  props.loadDictionaries();
  props.loadUserFromStorage();
  return ( props.loading ? <Loading /> : 
    <Layout>
      <Router>
          <Scene key="root">
              <Scene key={Scens.login} component={Login} title="Вход" />
              <Scene key={Scens.dashboard} component={Dashboard} title="Поиск" initial />
              <Scene key={Scens.accounnt} component={Account} title="Аккаунт" />
              <Scene key={Scens.items} component={Items} title="Объявления" />
              <Scene key={Scens.item} component={Item} title="Объявление" />
              <Scene key={Scens.profile} component={Profile} title="Профиль" />
              <Scene key={Scens.myAds} component={MyAds} title="Мои объявления" />
              <Scene key={Scens.createPost} component={CeratePost} title="Новый пост" />
              <Scene key={Scens.register} component={Register} title="Регистрация" />
          </Scene>
      </Router>
    </Layout>
  )
};

const mapStateToProps = ({ dictionaries }: IState) => {
  return dictionaries;
};

export default connect(mapStateToProps, {
    loadDictionaries,
    loadUserFromStorage
})(RouterApp);
