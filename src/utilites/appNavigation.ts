import { Actions } from 'react-native-router-flux';
import { Scens as ScensEnum } from '../enum/Scens'
import { isLoggedIn } from '../utilites/auth'

import { IItemsState } from '../scens/Items';
import { IItemState} from '../scens/Item';

export const toItems = (props: IItemsState) => {
    Actions[ScensEnum.items](props);
}

export const toAccounnt = () => {
    if (!isLoggedIn()) {
        toLogin();
    } else {
        Actions[ScensEnum.accounnt]();
    }
}

export const toItem = (props: IItemState) => {
    Actions[ScensEnum.item](props);
}

export const toLogin = () => {
    Actions[ScensEnum.login]();
}

export const toDashboard = () => {
    Actions[ScensEnum.dashboard]();
}