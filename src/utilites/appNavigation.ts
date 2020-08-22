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

 async function middlewareAuth(scen: Scens, props: any = {}) {
    const isAuth = await Auth.isAuth();

    if (!isAuth && scensAuth.indexOf(scen) > -1) {
        Actions[Scens.login]();
    } else {
        Actions[scen](props);
    }
}

export const toBack = () => {
    Actions.pop();
}

export const toItems = () => {
    middlewareAuth(Scens.items);
}

export const toItem = (props: { item: IItem }) => {
    middlewareAuth(Scens.item, props);
}

export const toAccounnt = () => {
    middlewareAuth(Scens.accounnt);
}

export const toLogin = () => {
    middlewareAuth(Scens.login);
}

export const toProfile = () => {
    middlewareAuth(Scens.profile);
}

export const toDashboard = () => {
    middlewareAuth(Scens.dashboard);
}

export const toLoading = () => {
    middlewareAuth(Scens.loading);
}

export const toMyAds = () => {
    middlewareAuth(Scens.myAds);
}

export const toCreatePost = () => {
    middlewareAuth(Scens.createPost);
}

export const toEditPost = (props: IEditPostProps) => {
    middlewareAuth(Scens.editPost, props);
}

export const toRegister = () => {
    middlewareAuth(Scens.register);
}

export const toSocial = () => {
    middlewareAuth(Scens.social);
}

export const toVkPage = () => {
    middlewareAuth(Scens.vk);
}