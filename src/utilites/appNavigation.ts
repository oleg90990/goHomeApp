import { Actions } from 'react-native-router-flux';
import { Scens } from '../enum/Scens'
import { isLoggedIn } from '../utilites/auth'

import { IItemsProps } from '../scens/Items/types';
import { IItemProps } from '../scens/Item/types';
import { IDashboardProps } from '../scens/Dashboard/types';
import { ILoginProps } from '../scens/Login/types';
import { IAccountProps } from '../scens/Account/types';
import { ILoadingProps } from '../scens/Loading/types';

const scensAuth: Scens[] = [
    Scens.accounnt
];

function middlewareAuth(scen: Scens, props: any = {}) {
    if (!isLoggedIn() && scensAuth.indexOf(scen) > -1) {
        Actions[Scens.login]();
    } else {
        Actions[scen](props);
    }
}

export const toItems = (props: IItemsProps) => {
    middlewareAuth(Scens.items, props);
}

export const toItem = (props: IItemProps) => {
    middlewareAuth(Scens.item, props);
}

export const toAccounnt = (props: IAccountProps) => {
    middlewareAuth(Scens.accounnt, props);
}

export const toLogin = (props: ILoginProps) => {
    middlewareAuth(Scens.login, props);
}

export const toDashboard = (props: IDashboardProps) => {
    middlewareAuth(Scens.dashboard, props);
}

export const toLoading = (props: ILoadingProps) => {
    middlewareAuth(Scens.loading, props);
}