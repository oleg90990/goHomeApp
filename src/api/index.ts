import { IStateDictionaries } from '../store/dictionaries'
import data from '../fakeData/dictionaries';
import items from '../fakeData/items';
import { IItem } from '../scens/Item/types';
import { IStateSearchFormReducer } from '../store/searchForm';
import { Sortby } from '../enum/Form';
import { IStateUserReducer } from '../store/user';

export default class Api {
    public static loadDictionaries(): Promise<IStateDictionaries> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const d: any = data;
                resolve(d);
            }, 100)
        });
    }

    public static loadItems(params: IStateSearchFormReducer, sortBy: Sortby): Promise<IItem[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const d: any = items;
                resolve(d);
            }, 500)
        });
    }

    public static login(username: string, password: string): Promise<IStateUserReducer> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const d: IStateUserReducer = {
                    id: 1,
                    username: 'username',
                    phone: '123456789',
                    jwt: 'wqdqwd'
                };
                resolve(d);
            }, 2500)
        });
    }
}