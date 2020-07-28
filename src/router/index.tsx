import React, { useState, useEffect } from 'react';
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
import EditPost from '../scens/EditPost';
import Register from '../scens/Register';

import Social from '../scens/Social';
import Vk from '../scens/Social/pages/Vk';
import Instagram from '../scens/Social/pages/Instagram';

import Layout from "../components/layout/Index";

import { connect } from 'react-redux';
import { loadDictionaries  } from '../store/dictionaries/actions';
import { loadData as loadUserData  } from '../store/user/actions';

interface IRouterProps {
    loadDictionaries(): any,
    loadUserData(): any
}

const RouterApp: React.FC<IRouterProps> = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      props.loadDictionaries(),
      props.loadUserData()
    ]).then(() => {
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    })
  }, []);
  
  return ( loading ? <Loading /> : 
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
              <Scene key={Scens.editPost} component={EditPost} title="Регистрация" />
              <Scene key={Scens.social} component={Social} title="Социальне сети" />
              <Scene key={Scens.vk} component={Vk} title="Вконтакте" />
              <Scene key={Scens.vk} component={Vk} title="Вконтакте" />
              <Scene key={Scens.instagram} component={Instagram} title="Instagram" />
          </Scene>
      </Router>
    </Layout>
  )
};

export default connect(null, {
  loadDictionaries,
  loadUserData
})(RouterApp);
