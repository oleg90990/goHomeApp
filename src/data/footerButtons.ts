import { toDashboard, toAccounnt } from '../utilites/appNavigation';

interface IFooterButton {
    title: string;
    icon: string;
    action: () => any;
}

const buttons: IFooterButton[] = [
    {
        title: 'профиль',
        icon: 'person',
        action: () => {
            toAccounnt({});
        }
    },
    {
        title: 'Поиск',
        icon: 'search',
        action: () => {
            toDashboard({});
        }
    }
]

export default buttons;