import { Actions } from 'react-native-router-flux';
import { Scens as ScensEnum } from '../enum/Scens'
import { isLoggedIn } from '../utilites/auth'

const authPages: ScensEnum[] = [
    ScensEnum.accounnt
];

export const Scens = ScensEnum;

export const Action = (scene: ScensEnum, props?: any) => {
    if (authPages.indexOf(scene) > -1 && !isLoggedIn()) {
        Actions[ScensEnum.login]();
    } else {
        Actions[scene](props);
    }
}