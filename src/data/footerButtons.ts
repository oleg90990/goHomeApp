import { toDashboard, toAccounnt } from '../utilites/appNavigation';

interface IFooterButton {
    title: string;
    icon: string;
    action: () => any;
}

const buttons: IFooterButton[] = [
    {
        title: 'Аккаунт',
        icon: 'person',
        action: () => {
            toAccounnt({});
        }
    },
    {
        title: 'Гланая',
        icon: 'menu',
        action: () => {
            toDashboard({});
        }
    }
]

export default buttons;