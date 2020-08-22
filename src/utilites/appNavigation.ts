import { Actions } from 'react-native-router-flux';
import { Scens } from '../enum/Scens'
import Auth from './auth';

import { IItem } from 'friendshome-api';
import { IEditPostProps } from '../scens/EditPost/types';

const scensAuth: Scens[] = [
  Scens.accounnt,
  Scens.profile,
  Scens.myAds,
  Scens.createPost,
  Scens.editPost,
  Scens.social,
  Scens.vk
];

async function middlewareAuth(scen: Scens, props: object = {}): void  {
  const isAuth = await Auth.isAuth();

  if (!isAuth && scensAuth.indexOf(scen) > -1) {
    Actions[Scens.login]();
  } else {
    Actions[scen](props);
  }
}

export const toBack = (): void => {
  Actions.pop();
}

export const toItems = (): void => {
  middlewareAuth(Scens.items);
}

export const toItem = (props: { item: IItem }): void => {
  middlewareAuth(Scens.item, props);
}

export const toAccounnt = (): void => {
  middlewareAuth(Scens.accounnt);
}

export const toLogin = (): void => {
  middlewareAuth(Scens.login);
}

export const toProfile = (): void => {
  middlewareAuth(Scens.profile);
}

export const toDashboard = (): void => {
  middlewareAuth(Scens.dashboard);
}

export const toLoading = (): void => {
  middlewareAuth(Scens.loading);
}

export const toMyAds = (): void => {
  middlewareAuth(Scens.myAds);
}

export const toCreatePost = (): void => {
  middlewareAuth(Scens.createPost);
}

export const toEditPost = (props: IEditPostProps): void  => {
  middlewareAuth(Scens.editPost, props);
}

export const toRegister = (): void => {
  middlewareAuth(Scens.register);
}

export const toSocial = (): void => {
  middlewareAuth(Scens.social);
}

export const toVkPage = (): void => {
  middlewareAuth(Scens.vk);
}