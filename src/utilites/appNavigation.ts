import { Actions } from 'react-native-router-flux';
import { Scens } from '../enum/Scens'
import Auth from './auth';

import { IItemsProps } from '../scens/Items/types';
import { IItemProps } from '../scens/Item/types';
import { IDashboardProps } from '../scens/Dashboard/types';
import { ILoginProps } from '../scens/Login/types';
import { IAccountProps } from '../scens/Account/types';
import { ILoadingProps } from '../scens/Loading/types';
import { IProfileProps } from '../scens/Profile/types';

const scensAuth: Scens[] = [
    Scens.accounnt
];

 async function middlewareAuth(scen: Scens, props: any = {}) {
    const isAuth = await Auth.isAuth();

    if (!isAuth && scensAuth.indexOf(scen) > -1) {
        Actions[Scens.login]();
    } else {
        Actions[scen](props);
    }
}

export const toItems = () => {
    middlewareAuth(Scens.items);
}

export const toItem = (props: IItemProps) => {
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